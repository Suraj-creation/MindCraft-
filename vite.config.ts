import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/send-enquiry', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          });
          return res.end();
        }
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
        let body = '';
        req.on('data', (chunk: Buffer) => { body += chunk; });
        req.on('end', async () => {
          try {
            const parsed = body ? JSON.parse(body) : {};
            const handlerModule = await import('./api/send-enquiry.js');
            const mockReq = { method: 'POST', body: parsed, headers: req.headers };
            const mockRes = {
              setHeader: (k: string, v: string) => res.setHeader(k, v),
              status: (code: number) => ({
                json: (data: any) => {
                  res.writeHead(code, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(data));
                },
                end: () => res.end()
              })
            };
            await handlerModule.default(mockReq, mockRes);
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), devApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
