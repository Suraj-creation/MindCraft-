/**
 * Illustrative, projected and draft content in the data files carries figures with no cited source:
 * invented client results, projections and statistics. MindCraft does not publish unsourced numbers, so a
 * sentence or item with such a figure is withheld where it is displayed until it carries a source.
 * The data itself is left intact and the gaps are reported as data issues, not silently rewritten.
 */
const UNSOURCED_FIGURE = /\d\s?%|\d(?:\.\d+)?\s?[x×](?![a-z])|\$\s?\d/i;

export const hasUnsourcedFigure = (s: string) => UNSOURCED_FIGURE.test(s);

/** List items without an unsourced figure. */
export const withholdFigures = (items: readonly string[]) => items.filter((s) => !hasUnsourcedFigure(s));

/** Running text with any sentence that carries an unsourced figure removed. */
export const withholdFigureSentences = (text: string) =>
  text
    .split(/(?<=[.!?])\s+/)
    .filter((s) => !hasUnsourcedFigure(s))
    .join(' ');
