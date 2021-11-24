export default [
  {
    path: '/promotion/setting/home',
    component: () =>import('./pages/setting.vue'),
    meta: { title: '设置' },
  },
  {
    path: '/promotion/setting/detail',
    component: () =>import('./pages/settingdetail.vue'),
    meta: { title: '设置详情' },
  },
]
