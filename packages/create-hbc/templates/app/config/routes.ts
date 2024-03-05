// https://umijs.org/docs/guides/routes

export const routes = [
  {
    path: '/',
    routes: [
      { path: '/', component: 'index' },
      { path: '/docs', component: 'docs' }
    ]
  }
];
