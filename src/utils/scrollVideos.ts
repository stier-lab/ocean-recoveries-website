const initScrollVideos = () => {
  document.querySelectorAll<HTMLVideoElement>('[data-scroll-video]').forEach((video) => {
    if (video.dataset.observed) return;
    video.dataset.observed = 'true';
    video.muted = true;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let manuallyPaused = false;
    let automaticPause = false;
    const sync = () => {
      if (inView && !document.hidden && !motion.matches && !manuallyPaused) {
        video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
      } else if (!video.paused) {
        automaticPause = true;
        video.pause();
      }
    };
    video.addEventListener('pause', () => {
      if (!automaticPause && inView && !document.hidden) manuallyPaused = true;
      automaticPause = false;
    });
    video.addEventListener('play', () => { manuallyPaused = false; });
    // Use visible pixels so tall portrait videos can start on short phone screens.
    const observer = new IntersectionObserver(([entry]) => {
      const visibleHeight = Math.min(entry.boundingClientRect.height, window.innerHeight);
      inView = entry.isIntersecting && entry.intersectionRect.height >= visibleHeight * 0.4;
      video.toggleAttribute('data-video-in-view', inView);
      sync();
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });
    observer.observe(video);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    document.addEventListener('astro:before-swap', () => {
      observer.disconnect();
      video.pause();
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
    }, { once: true });
  });
};

initScrollVideos();
document.addEventListener('astro:page-load', initScrollVideos);
