
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/front-end/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/front-end"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 502, hash: 'c218ac526321ebf8a2b0685af4559309ae0d55ecadf6f6a608ff7b96f3bb8e58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'b5558da0ad9d177561700b9965be8fd8017464c4859bc1cf44711f09e29173c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20844, hash: '700b3794f5b61dceeb96a14e1d69539deb98a31694f001d1d6b45b37c8bb90fc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
