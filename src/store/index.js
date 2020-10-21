// 处理Vuex.store文件
import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import student from './modules/student';
import { CHANGE_OBJ, UPDATE_MSG } from './mutation-types'; //引入常量


Vue.use(Vuex);
// State就是一个对象，对象里包含了所有应用组件的状态，就是存放数据的

export default new Vuex.Store({
    strict: true,//设置vuex严格模式，不能在Mutation之外更改状态
    modules: { //模块
        count,
        student,
    },
    state: {
        obj: {a: 1},
        msg: '',
    },
    mutations: {
        [CHANGE_OBJ] (state) {
            Vue.set(state.obj, 'b', 10);
            // state.obj = {...state.obj, b: 10};
        },
        [UPDATE_MSG] (state, {value}) {
            state.msg = value;
        }
    },
})

