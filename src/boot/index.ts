import './loadRoutes';
import qs from '@/utils/querystring'
import loader from '@/utils/loader'
// 调试使用，正式环境debug=1强制开启控制台
const query = qs.parse(window.location.search)
if (process.env.NODE_ENV == 'production' && query.debug == 1) {
  loader('https://cdn.jsdelivr.net/npm/eruda').then(() => {
    window.eruda.init()
  })
}

////可以在加载路由之前提前加载某些方法

export default function boot(app: any) {
    return app
}