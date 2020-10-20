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
    },
    getters: {//store的计算属性,相当于组件的computed
        // 计算属性第一个参数就是state
        // doubleCount (state) {
        //     return state.count * 2;
        // },
        doubleCount: state => state.count * 2,

        // addCount (state) {
        //     // 这里也可以直接返回一个函数,通过不同的参数,去执行不同的功能
        //     return function (num) {
        //         return state.count + num;
        //     }
        // }
        addCount: state => num => state.count + num, //上面的简写
        
        studentLength: state => state.studentList.length,
        // 未成年列表,年龄小于18的学生,从列表里过滤出来,生成新的数组
        studentJuveniles: state => state.studentList.filter(student => student.age < 18),
    }
})