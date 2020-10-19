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
    {path: '/about', component: () => import('./views/About')},
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

export default new VueRouter({
    mode: 'history',
    routes,
});