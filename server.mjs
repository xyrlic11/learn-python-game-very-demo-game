import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Local-only server; expose game assets, never arbitrary workspace files.
const root = path.dirname(fileURLToPath(import.meta.url));
const assets = new Set([
  '/index.html', '/css/game.css', '/js/app.js', '/js/levels/level1.js',
  '/js/game/Renderer.js', '/js/game/Movement.js', '/js/runtime/CommandRunner.js',
  '/js/game/World3D.js', '/js/ui/Studio.js', '/css/studio.css',
  '/js/levels/levels.js', '/js/game/PuzzleRules.js',
  '/js/game/Atmosphere.js', '/js/ui/Sound.js',
  '/js/game/RobotModel.js',
  '/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js',
  '/node_modules/three/build/three.module.js', '/node_modules/three/build/three.core.js',
  '/node_modules/three/examples/jsm/controls/OrbitControls.js',
]);
http.createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const asset = pathname === '/' ? '/index.html' : pathname;
  if (!assets.has(asset)) {
    response.writeHead(404).end();
    return;
  }
  try {
    const data = await readFile(path.join(root, asset));
    const type = asset.endsWith('.css') ? 'text/css' : asset.endsWith('.js') ? 'text/javascript' : 'text/html';
    response.writeHead(200, { 'Content-Type': `${type}; charset=utf-8`, 'Cache-Control': 'no-store' });
    response.end(data);
  } catch {
    response.writeHead(500).end('Unable to load game asset');
  }
}).listen(8000, '127.0.0.1', () => console.log('RUNTIME: http://127.0.0.1:8000'));
