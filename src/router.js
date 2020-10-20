import Vue from 'vue';

import VueRouter from 'vue-router';  //引入vue-router

import Home from './views/Home'

Vue.use(VueRouter); //只要使用了use，就会调用这个函数的install方法


const routes = [
    {path: '/', component: Home},
    {path: '/learn', component: () => import('./views/Learn')},
    {path: '/student', component: () => import('./views/Student')},
    {path: '/about', component: () => import('./views/About')},
    {path: '/activity', component: () => import('./views/Activity')},
]

export default new VueRouter({
    // mode: history,
    routes,
});

