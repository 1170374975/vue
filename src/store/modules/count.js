import {COUNT_INCREMENT} from '../mutation-types';
export default {
    //命名空间，想要通过mapState的方式拿到state的值，就需要加上命名空间，
    // 在mapState里，需要接收第一个参数，是模块的名字
    namespaced: true, //该模块就成命名空间的模块了
    state: {
        count: 0,
    },
    getters: {//store的计算属性,相当于组件的computed
        // 第一个参数是该模块下的state状态,第二个参数是该模块下的其他getters，第三个参数是根模块的state状态
        doubleCount: (state, getters, rootState) => {
            console.log(state, getters, rootState);
            return state.count * 2;
        },
        addCount: state => num => state.count + num, //上面的简写
    },
    mutations: {
        // mutation函数，传递的第一个参数是state，第二个参数是：通过commit（提交）执行时传递的，一般是对象

        // 使用常量代替mutation事件类型, 将变量作为函数的名字，放到[]里
        [COUNT_INCREMENT] (state, {num}) {
            state.count += num;
        },
    },
    actions: {
        // 会去接收一个参数，第一个参数是context 上下文对象，是和store实例具有相同的方法和属性的对象,通过context找到commit方法提交mutation
        // 第二个参数是从分发函数处传递过来的
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
}