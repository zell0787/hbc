import { defineConfig } from 'hbc-core';
import { routes } from './routes';
import { base, publicPath } from './constants';
import { proxy } from './proxy';

export default defineConfig({
  base,
  publicPath,
  routes,
  proxy,
  npmClient: 'pnpm',
});
