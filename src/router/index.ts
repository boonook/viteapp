import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import configureRouter from './configureRouter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    component: () =>import('@/views/home/home.vue'),
  },
  {
    path: '/auth/login',
    component: () =>import('@/views/login/login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () =>import('@/views/PageNotFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Router Hooks
configureRouter(router)

export default router
