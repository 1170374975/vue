// 处理Vuex.store文件
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// State就是一个对象，对象里包含了所有应用组件的状态，就是存放数据的

export default new Vuex.Store({
    // 通过this.$store.state.count可以访问count
    state: {
        count: 0,
        studentList: [],//存放学生列表
    }
})