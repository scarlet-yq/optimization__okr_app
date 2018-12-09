export const page404 = {
    path: '/*',
    name: 'error-404',
    meta:{
        title: '404-页面不存在'
    },
    component: () => import("@/views/error-page/404.vue")
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
}

export const page500 = {
    path: '/405',
    meta: {
        title: '500-服务端错误'
    },
    component: () => import('@/views/error-page/500.vue')
}

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: () => import('@/views/home/home.vue')
}

export const appRouter = [
    {
        path: '/home',
        icon: 'app-home',
        name: 'home',
        title: '首页',
        component: () => import('@/views/home/home.vue')
    },
    /*{
        path: '/okr',
        icon: 'app-okr',
        name: 'okr',


        title: 'okr',
        component: () => import('@/views/okr/okr.vue')
    },*/
    /*{
        path: '/notice',
        icon: 'app-notice',
        name: 'notice',
        title: '公告',
        component: () => import('@/views/notice/notice.vue')
    },*/
    {
        path: '/mall',
        icon: 'app-mall',
        name: 'mall',
        title: '商城',
        component: () => import('@/views/mall/mall.vue')
    },
    {
        path: '/mine',
        icon: 'app-mine',
        name: 'mine',
        title: '我的',
        component: () => import('@/views/mine/mine.vue')
    },
    {
        path: '/mall/commodity-detail/:id',
        name: 'detail',
        component: () => import('@/views/commodity-detail/commodity-detail.vue')
    },
    {
        path: '/mine/personalInformation',
        name: 'personalInformation',
        component: () => import ('@/views/personalInformation/personalInformation.vue')
    },
    {
        path: '/mine/order',
        name: 'order',
        component: () => import('@/views/order/order.vue')
    },
    {
        path: '/mine/myInintegral',
        name: 'myInintegral',
        component: () => import('@/views/myInintegral/myInintegral.vue')
    },
   {
       path: '/mine/aboutokr',
       name: 'aboutokr',
       component: () => import('@/views/aboutokr/aboutokr')
   }
];

// 所有上面定义的路由都要写在下面的routers
export const routers = [
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];