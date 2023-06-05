export const constRoute = [
  {
    //登陆
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    //登陆成功后展示
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    //404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
