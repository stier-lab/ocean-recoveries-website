import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const folder = 'output/rennick-short';
await mkdir(folder, { recursive: true });
const names = ['kelp-forest-habitat-pencil.jpg', 'rennick-bare-reef-pencil.jpg',
  'purple-sea-urchin-pencil.jpg', 'drift-kelp-pencil.webp'];
const urls = await Promise.all(names.map(async name =>
  'data:image/' + (name.endsWith('webp') ? 'webp' : 'jpeg') + ';base64,' +
  (await readFile('public/images/research/' + name)).toString('base64')));
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.evaluate(async urls => {
    const [forest, barren, urchin, blade] = await Promise.all(urls.map(async src => {
      const img = new Image();
      img.src = src;
      await img.decode();
      return img;
    }));
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const c = canvas.getContext('2d');
    const smooth = (a, b, t) => {
      const x = Math.max(0, Math.min(1, (t - a) / (b - a)));
      return x * x * (3 - 2 * x);
    };
    // Start in separate rocky pockets and converge on two nearby stipe bases.
    const grazers = [[.10,.84,.17,.76],[.30,.91,.25,.80],[.47,.86,.33,.76],
      [.57,.83,.57,.70],[.74,.91,.66,.72],[.90,.84,.75,.70]];
    const thinning = new OffscreenCanvas(1080, 1920);
    const layer = thinning.getContext('2d');
    const drawReef = (img, ctx = c) => {
      const crop = img.height * 9 / 16;
      ctx.drawImage(img, (img.width - crop) / 2, 0, crop, img.height, 0, 0, 1080, 1920);
    };
    const drawThinning = t => {
      drawReef(barren);
      if (t >= 17) return;
      layer.clearRect(0, 0, 1080, 1920);
      drawReef(forest, layer);
      layer.save();
      layer.globalCompositeOperation = 'destination-out';
      // Remove neighboring stands on separate clocks, starting at their bases.
      for (const [x, y, start, end, width] of [
        [265, 1480, 11.6, 13.5, 300],
        [690, 1360, 12.8, 15.1, 320],
        [1000, 1420, 14.1, 16.3, 340],
        [-15, 1440, 15.1, 17, 360],
      ]) {
        const gone = smooth(start, end, t);
        if (!gone) continue;
        layer.save();
        layer.translate(x, y - 580 * gone);
        layer.scale(width * (.22 + gone), 110 + 1070 * gone);
        const edge = layer.createRadialGradient(0, 0, .72, 0, 0, 1);
        edge.addColorStop(0, '#000');
        edge.addColorStop(1, '#0000');
        layer.fillStyle = edge;
        layer.fillRect(-1, -1, 2, 2);
        layer.restore();
      }
      layer.globalAlpha = smooth(16.65, 17, t);
      layer.fillRect(0, 0, 1080, 1920);
      layer.restore();
      c.drawImage(thinning, 0, 0);
    };
    window.renderReefFrame = t => {
      const lines = t < 6 ? ['Drift kelp arrives', 'Urchins catch and eat loose blades.']
        : t < 9 ? ['Drift kelp stops arriving']
        : t < 12 ? ['Urchins leave their crevices', 'and move toward living kelp.']
        : t < 17 ? ['Urchins graze at the base', 'of the adult kelp.']
        : ['Sustained grazing can', 'leave an urchin barren.'];
      c.save();
      if (t < 11.6) drawReef(forest);
      else drawThinning(t);
      c.globalCompositeOperation = 'multiply';
      for (const [i, [x, y, targetX, targetY]] of grazers.entries()) {
        const move = smooth(8.3 + i * .13, 10.7 + i * .13, t);
        const cx = (x + (targetX - x) * move) * 1080;
        const cy = (y + (targetY - y) * move) * 1920;
        c.save();
        // Let the existing rock drawing hide most of the sprite until it crawls clear.
        if (move < 1) {
          const lip = y * 1920 + 16 + (i % 3) * 3 + 98 * move;
          c.beginPath();
          c.moveTo(cx - 85, lip + 9);
          c.lineTo(cx - 30, lip - 6);
          c.lineTo(cx + 14, lip + 2);
          c.lineTo(cx + 85, lip - 9);
          c.lineTo(cx + 85, cy - 100);
          c.lineTo(cx - 85, cy - 100);
          c.closePath();
          c.clip();
        }
        c.translate(cx, cy);
        const feeding = smooth(10.4, 11.5, t) * (1 - smooth(15, 17, t));
        c.rotate(Math.sin(t * 9 + i) * (.07 * (1 - move) * move + .055 * feeding));
        c.drawImage(urchin, -90, -60, 180, 120);
        c.restore();
      }
      c.globalCompositeOperation = 'source-over';
      for (const [x, y, start] of [[265, 1440, 11.3], [690, 1310, 12.55], [790, 1360, 13.7]]) {
        for (let i = 0; i < 4; i++) {
          const age = t - start - i * .21;
          if (age <= 0 || age >= .85) continue;
          c.save();
          c.globalAlpha = 1 - smooth(.18, .85, age);
          c.translate(x + (i - 1.5) * 35 * age, y - 80 * age);
          c.rotate(i + age * 3);
          c.drawImage(blade, -13, -4, 26, 8);
          c.restore();
        }
      }
      for (let i = 0; i < 12; i++) {
        const age = t - (-1.3 + i * .57);
        if (age <= 0 || age >= 2.75) continue;
        const [x, y] = grazers[i % grazers.length];
        const approach = smooth(0, 1.45, age);
        const eaten = smooth(1.62, 2.75, age);
        const side = i % 2 ? 1 : -1;
        const w = 146 * (1 - eaten);
        c.save();
        c.globalAlpha = smooth(0, .18, age) * (1 - smooth(2.60, 2.75, age));
        c.translate(x * 1080 + side * (1 - approach) * 150, y * 1920 - 9 - (1 - approach) * 295);
        c.rotate(side * (.16 + Math.sin(age * (approach === 1 ? 16 : 4)) * .22));
        // Keep the end at the urchin fixed while the exposed part is eaten.
        c.drawImage(blade, side < 0 ? -w : 0, -23, w, 46 * (1 - .65 * eaten));
        c.restore();
      }
      c.restore();
      c.fillStyle = '#f9f5e9eb';
      c.fillRect(62, 202, 870, lines.length === 2 ? 158 : 106);
      c.fillStyle = '#172f2c';
      c.font = 'bold 47px Arial';
      lines.forEach((line, i) => c.fillText(line, 92, 270 + i * 52, 810));
      return canvas.toDataURL('image/jpeg', .93).split(',')[1];
    };
  }, urls);
  const encoder = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe',
    '-framerate', '30', '-vcodec', 'mjpeg', '-i', 'pipe:0', '-c:v', 'libx264',
    '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', folder + '/rennick-drift-kelp-half-out.mp4'],
  { stdio: ['pipe', 'inherit', 'inherit'] });
  const finished = once(encoder, 'close');
  try {
    for (let frame = 0; frame < 600; frame++) {
      const jpg = await page.evaluate(t => window.renderReefFrame(t), frame / 30);
      if (!encoder.stdin.write(Buffer.from(jpg, 'base64'))) await once(encoder.stdin, 'drain');
    }
  } finally {
    encoder.stdin.end();
    const [code] = await finished;
    if (code !== 0) throw new Error('Video encoder failed: ' + code);
  }
} finally {
  await browser.close();
}
