// 处理Vuex.store文件
import Vue from 'vue';
import Vuex from 'vuex';
import { COUNT_INCREMENT, CHANGE_OBJ, UPDATE_MSG } from './mutation-types'; //引入常量


Vue.use(Vuex);
// State就是一个对象，对象里包含了所有应用组件的状态，就是存放数据的

export default new Vuex.Store({
    strict: true,//设置vuex严格模式，不能在Mutation之外更改状态
    state: {
        count: 0,
        studentList: [],//存放学生列表
        obj: {a: 1},
        msg: '',
    },
    getters: {//store的计算属性,相当于组件的computed
        doubleCount: state => state.count * 2,
        addCount: state => num => state.count + num, //上面的简写
        studentLength: state => state.studentList.length,
        // 未成年列表,年龄小于18的学生,从列表里过滤出来,生成新的数组
        studentJuveniles: state => state.studentList.filter(student => student.age < 18),
    },
    mutations: {
        // mutation函数，传递的第一个参数是state，第二个参数是：通过commit（提交）执行时传递的，一般是对象

        // 使用常量代替mutation事件类型, 将变量作为函数的名字，放到[]里
        [COUNT_INCREMENT] (state, {num}) {
            state.count += num;
        },
        [CHANGE_OBJ] (state) {
            Vue.set(state.obj, 'b', 10);
            // state.obj = {...state.obj, b: 10};
        },
        [UPDATE_MSG] (state, {value}) {
            state.msg = value;
        }
    },
    actions: {
        // 会去接收一个参数，第一个参数是context 上下文对象，是和store实例具有相同的方法和属性的对象,通过context找到commit方法提交mutation
        // 第二个参数是从分发函数处传递过来的
        // countIncrement (context, payload) {
        //     setTimeout(() => {
        //         context.commit(COUNT_INCREMENT, payload);
        //     }, 1000)
        // }
        countIncrement (context, payload) {
            // 用promise可以知道action什么时候结束
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit(COUNT_INCREMENT, payload);
                    resolve();
                }, 1000)
            })
        }
    
    }
})

