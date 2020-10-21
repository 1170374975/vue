<template>
    <div class="home">首页-内容
        <button @click="handleClick">增加</button>
        {{ count }}
        {{ doubleCount }}  {{ $store.getters['count/doubleCount']}}
        {{ addCount(3)}}
        {{ obj }}

        <!-- 双向数据绑定，用计算属性setter实现 -->
        <input v-model="msg"> {{ msg }}
    </div>
</template>



<script>
// 如果需要用到的数据特别多，每个都用计算属性，会有比较冗余的代码
import {mapState, mapGetters, mapMutations} from 'vuex';
//数组里是想要获取到状态的名字,函数执行，会返回计算属性的对象，相当于写到computed里
// console.log(mapState(['count']));

import {COUNT_INCREMENT, CHANGE_OBJ, UPDATE_MSG} from '@/store/mutation-types';

export default {
    data () {
        return {
            // count: 100,
        }
    },
    computed: {
        // 获取到count的值，
        //命名空间，想要通过mapState的方式拿到state的值，就需要加上命名空间，
        // 在mapState里，需要接收第一个参数，是模块的名字
        ...mapState('count',['count']),
        ...mapState(['obj']),
        // a () { .....  }
        //辅组函数,获取到store的计算属性
        ...mapGetters('count', ['addCount', 'doubleCount']),

        // 双向绑定的计算属性
        msg: {
            get () {
                return this.$store.state.msg;
            },
            set (value) {
                // console.log(value);
                // 提交UPDATE_MSG的值
                this.$store.commit(UPDATE_MSG, {value});
            }
        }
    },
    methods: {
        handleClick () {
            //提交名为countIncrement的mutations
            const num = Math.floor(Math.random() * 100);
            // mutation函数，传递的第一个参数是state，第二个参数是：通过commit（提交）执行时传递的，一般是对象
            // this.$store.commit(COUNT_INCREMENT, { num }); 

            // 使用命名空间后，分发action ，需要在countIncrement前面加上命名空间的名称/
            this.$store.dispatch('count/countIncrement', {num}).then(() => {
                alert('count已增加')
            })
           
            this.$store.commit(CHANGE_OBJ);
        },
        
    }
}

</script>