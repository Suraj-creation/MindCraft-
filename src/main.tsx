import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import {routePath, tabFromHash, tabFromPath} from './data/navigation';
import './index.css';

// Links shared before routes had paths (`/#consulting`) load that route's own prerendered page instead.
const legacy = tabFromHash(window.location.hash);
if (legacy) {
  window.location.replace(routePath(legacy));
} else {
  const tab = tabFromPath(window.location.pathname) ?? 'home';
  const root = document.getElementById('root')!;
  const app = (
    <StrictMode>
      <App initialTab={tab} />
    </StrictMode>
  );
  // Production pages arrive prerendered for their route and hydrate; the dev server serves an empty shell.
  if (root.dataset.route === tab) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
