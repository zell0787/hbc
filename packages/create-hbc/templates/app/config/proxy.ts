import address from 'address';

const defaultProxyOptions = {
  changeOrigin: true,
  cookieDomainRewrite: address.ip(),
  headers: {
    // for issue: https://github.com/webpack/webpack-dev-server/issues/3254
    Connection: 'keep-alive',
  },
};

export const proxy = {
  '/api': {
    target: 'http://jsonplaceholder.typicode.com/',
    pathRewrite: { '^/api': '' },
    ...defaultProxyOptions,
  },
};
