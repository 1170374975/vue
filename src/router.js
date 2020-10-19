import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);//使用路由
const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    // {path: '/learn', component: () => import('./views/Learn')},
    {   path: '/learn', 
        components:{
            default: () => import('./views/Learn'),//默认视图
            student: () => import('./views/Student'),//命名视图
        }, 
    },
    {path: '/student', component: () => import('./views/Student')},
    {
        path: '/about', 
        component: () => import('./views/About'),
        // 路由独享守卫
        beforeEnter(to, from, next) {
            // console.log('beforeEnter');
            next();
        } 
    },
    {
        path: '/activity', 
        component: () => import('./views/Activity'),
        redirect (to) {
            return {
                name: 'academic',
            }
        },
        children: [
            {path: 'academic', name: 'academic', component: () => import('./views/Academic')},
            {path: 'personal', name: 'personal', component: () => import('./views/Personal')},
            {path: 'download', name: 'download', component: () => import('./views/Download')}
        ],
    },
    // 动态路由,需要在html，:to里设置id的值
    {
        path: '/question/:id', 
        name: 'question', 
        //路由组件传参,使用props将组件和路由解耦
        // props: true,
        // 如果想使用$route相关的，除了params的一些参数，可以把props写成函数的形式
        props: route => ({ 
            // name: route.name,
            id: route.params.id
        }),
        component: () => import('./views/Question')
    },
];

// export default new VueRouter({
//     mode: 'history',
//     routes,
// });

// 导航守卫
const router = new VueRouter({
    mode: 'history',
    routes,
});
// 在路由跳转前触发，执行的函数(一般被用于登录验证)
// to目标路由对象，from即将要离开的路由对象，next三个参数中最重要的参数
// 必须用next()
router.beforeEach((to, from, next) => {
    // console.log(to);  //目标路由对象
    // console.log(from);//即将要离开的路由对象
    // console.log('beforeEach');
    next(); //正常跳转
    //next(false);  //不让跳转，从哪来回哪去

    // if(to.path === '/student') {
    //     next('/about'); //填写跳转的路径
    // } else {
    //     next();
    // }
    // next(new Error('不让跳转'))  
})
// router.onError(err => {
//     console.log(err.message);//错误跳转信息
// })

//和boforeEach类似路由跳转前触发。
//在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
router.beforeResolve((to, from, next) => {
    // console.log('beforeResolve');
    next();
})
// 路由跳转完成后触发。
router.afterEach((to, from) => {
    // console.log('afterEach');
})
export default router;