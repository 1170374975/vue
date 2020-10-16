import Vue from 'vue';
import VueRouter from 'vue-router'; //引入路由
import Home from './views/Home.vue';

Vue.use(VueRouter); //使用路由

// 定义路由
const routes = [
    // {path: '/', component: Home, redirect: '/home'},
    {path: '/home', component: Home, alias: '/'},//别名
    {path: '/learn', component: () => import('./views/Learn')},
    {path: '/student', component: () => import('./views/Student')},
    {path: '/about', component: () => import('./views/About')},
    {
        path: '/activity',
        component: () => import(/* webpackChunkName: "academic" */'./views/Activity'),
        // redirect: '/activity/academic',
        redirect (to) {
            return {
                name: 'academic'
            }
        },
        children: [
            {path: 'academic', name: 'academic', component: () => import(/* webpackChunkName: "academic" */'./views/Academic')},
            {path: 'personal', name: 'personal', component: () => import('./views/Personal')},
            {path: 'download', name: 'download', component: () => import('./views/Download')}
        ],
    },
];

//创建router实例，然后传router配置
export default new VueRouter({
    // mode: 'history',//设置history模式，地址栏url里不会有“#”出现了
    routes,
});


