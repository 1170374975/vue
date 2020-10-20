import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import auth from './utils/auth';  //引入登录文件

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
        // beforeEnter(to, from, next) {
        //     // console.log('beforeEnter');
        //     next();
        // } ,
        meta: { //路由元信息
            //用于验证是否要登录的功能
            requiresLogin: true,
            //backAsk: true, //询问是否离开
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
        meta: {
            requiresLogin: true,
            //backAsk: true, //询问是否离开
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
    {
        path: '/login',
        component: () => import('./views/Login'),
    }
];


// 导航守卫
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {  //路由的滚动行为
        if(savedPosition) {
            //savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
            //是记录x和y坐标
            return savedPosition;
        } else {
            // 判断要去到的目标路由对象中，是否有hash值
            if(to.hash) { //如果在地址栏输入哈希值#a，则会跳转到#a的位置
                return {selector: to.hash}//selector接收的值就是hash的锚点值
            } else {
                // 如果浏览器没有savedPosition的功能，且没有hash值，就回到顶部
                return {x: 0, y: 0}
            }
            
        }
    },
});
// 跳转之前的全局守卫
router.beforeEach((to, from, next) => {
    // console.log(to.meta.requiresLogin); //是否要登录
    // console.log(to.matched);//数组，里面存放自身和父级的信息
    
    // some函数，一真为真，全假为假
    const isRequiresLogin = to.matched.some(item => {
        // console.log(item.meta.requiresLogin);
        return item.meta.requiresLogin
    });
    // console.log(isRequiresLogin);
    if(isRequiresLogin) {
        // 验证有没有登录
        const isLogin = auth.isLogin();
        // console.log(isLogin);
        if(isLogin) { //如果已经登录，直接跳转
            next(); 
        } else {//没有登录
            //如果点击确定，window.confirm会返回true, 如果点击取消，会返回false
            const isToLogin = window.confirm('要登录后才可以浏览，要去登录吗？');
            //点击确定，到登录界面，点击取消，不跳转
            isToLogin ? next('/login') : next(false);
        }
    }else {
        next();
    }
})
export default router;