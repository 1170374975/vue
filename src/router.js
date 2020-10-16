import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);//使用路由
const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/learn', component: () => import('./views/Learn')},
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
    {path: '/question/:id', name: 'question', component: () => import('./views/Question')},

];

export default new VueRouter({
    mode: 'history',
    routes,
});