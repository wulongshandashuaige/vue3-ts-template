import { createRouter, createWebHashHistory } from 'vue-router'
import { constRoute } from './routes'

//创建路由器
let router = createRouter({
  history: createWebHashHistory(),
  routes: constRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
