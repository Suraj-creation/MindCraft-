import {StrictMode} from 'react';
import {prerenderToNodeStream} from 'react-dom/static';
import App from './App';
import type {NavTab} from './types';

export {ALL_TABS, routePath} from './data/navigation';
export {INDEXABLE_TABS, PAGES, SITE, absoluteUrl, pageMeta, structuredData} from './lib/seo';

/** Static HTML for one route; waits for every lazy page chunk so the whole page is in the markup. */
export async function render(tab: NavTab): Promise<string> {
  const {prelude} = await prerenderToNodeStream(
    <StrictMode>
      <App initialTab={tab} />
    </StrictMode>
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
