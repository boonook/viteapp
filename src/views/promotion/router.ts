import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
let routes: Array<RouteRecordRaw> = [
  {
    path: '/promotion/ticket-list-jegotrip',
    component: () =>
      import('./pages/ticket-list-jegotrip/index.vue'),
  },
]

const partnerFiles:any = import.meta.globEager('./pages/**/routes.ts');
////获取partnerFiles对象的所有key
Object.keys(partnerFiles).forEach(key=>{
  routes = [...routes, ...partnerFiles[key].default]
  routes.forEach((item) => {
    router.addRoute(item)
  })
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
