<template>
    <div class="home">首页-内容
        <button @click="handleClick">增加</button>
        {{ count }}
        {{ $store.getters.doubleCount }}
        {{ $store.getters.addCount(3)}}
        {{ obj }}

        <!-- 双向数据绑定，用计算属性setter实现 -->
        <input v-model="msg"> {{ msg }}
    </div>
</template>



<script>
// 如果需要用到的数据特别多，每个都用计算属性，会有比较冗余的代码
import {mapState, mapGetters} from 'vuex';
//数组里是想要获取到状态的名字,函数执行，会返回计算属性的对象，相当于写到computed里
// console.log(mapState(['count']));

import {COUNT_INCREMENT, CHANGE_OBJ, UPDATE_MSG} from '@/store/mutation-types';

export default {
    data () {
        return {
            // count: this.$store.state.count,
        }
    },
    // computed: {
    //     // 计算属性跟随着某个值的改变而改变
    //     // 如果我们想要使用vuex中的数据，就把他们放到计算属性里
    //     count () {
    //         return this.$store.state.count;
    //     }
    // },
    //数组里是想要获取到状态的名字,函数执行，会返回计算属性的对象，相当于写到computed里
    // computed: mapState(['count']),
    computed: {
        // 获取到count的值
        ...mapState(['count']),
        ...mapState(['obj']),
        // a () { .....  }
        //辅组函数,获取到store的计算属性
        ...mapGetters(['addCount', 'doubleCount']),

        // 双向绑定的计算属性
        msg: {
            get () {
                return this.$store.state.msg;
            },
            set (value) {
                console.log(value);
                // 提交UPDATE_MSG的值
                this.$store.commit(UPDATE_MSG, {value});
            }
        }
    },
    created () {
        console.log(this.$store.state.count);
    },
    methods: {
        handleClick () {
            //提交名为countIncrement的mutations
            const num = Math.floor(Math.random() * 100);
            // mutation函数，传递的第一个参数是state，第二个参数是：通过commit（提交）执行时传递的，一般是对象
            // this.$store.commit(COUNT_INCREMENT, { num }); 

            // 分发action ，调用dispatch方法,分发countIncrement函数
            this.$store.dispatch('countIncrement', {num}).then(() => {
                alert('count已增加')
            })
           
            this.$store.commit(CHANGE_OBJ);
        },
        
    }
}

</script>