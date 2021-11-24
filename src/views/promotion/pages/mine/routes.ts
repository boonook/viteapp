export default [
  {
    path: '/promotion/mine/home',
    component: () =>import('./pages/index.vue'),
    meta: { title: '我的' },
  },
  {
    path: '/promotion/mine/detail',
    component: () =>import('./pages/detail.vue'),
    meta: { title: '我的详情' },
  },
]
