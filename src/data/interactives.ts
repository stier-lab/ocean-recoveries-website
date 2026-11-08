/**
 * Data-driven interactive figures for paper news pages, keyed by DOI.
 * Rendered by src/components/interactives/DataInteractive.astro.
 *
 * Rule: every number here must be reported in the paper itself (abstract, results,
 * tables or figure captions). `source` tells readers where. Papers whose content is a
 * review or perspective without quantitative results get no entry.
 */
import entries from './interactives.json';

export interface Bar {
  label: string;
  value: number;
  lo?: number;
  hi?: number;
  /** a = sky, b = teal, c = amber, d = rose, e = grey (reference) */
  tone?: 'a' | 'b' | 'c' | 'd' | 'e';
  /** text shown instead of the number, e.g. "51%" */
  display?: string;
}
interface Base {
  doi: string;
  title: string;
  intro: string;
  source: string;
}
export interface CompareData extends Base {
  kind: 'compare';
  metric: string;
  unit?: string;
  views: { label: string; bars: Bar[]; note: string }[];
}
export interface GridData extends Base {
  kind: 'grid';
  total: number;
  unitLabel: string;
  views: { label: string; count: number; note: string; tone?: 'a' | 'b' | 'c' | 'd' }[];
}
export interface CurveData extends Base {
  kind: 'curve';
  xLabel: string;
  yLabel: string;
  x: { label: string; min: number; max: number; step: number; value: number; unit?: string };
  series: { label: string; fn: 'power' | 'linear' | 'exp'; a: number; b: number }[];
  /** {x}, {y0}, {y1}, {r01} (= y0 / y1) are filled in live */
  note: string;
  views?: undefined;
}
export type PaperInteractiveData = CompareData | GridData | CurveData;

export const interactives = entries as unknown as PaperInteractiveData[];

const norm = (doi: string) => doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').toLowerCase();
export const findInteractive = (doiUrl?: string) =>
  doiUrl ? interactives.find((e) => norm(e.doi) === norm(doiUrl)) : undefined;
