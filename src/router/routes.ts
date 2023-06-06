export const constRoute = [
  {
    //登陆
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登陆',
      hidden: true,
      icon: 'HomeFilled',
    },
  },
  {
    //登陆成功后展示
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'Layout',
      hidden: false,
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'HomeFilled',
    },
  },
  {
    //404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意',
      hidden: true,
      icon: 'HomeFilled',
    },
  },
]
