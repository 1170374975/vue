<template>
    <div class="home">首页-内容
        <button @click="handleClick">增加</button>
        {{ count }}
        {{ $store.getters.doubleCount }}
        {{ $store.getters.addCount(3)}}
    </div>
</template>



<script>
// 如果需要用到的数据特别多，每个都用计算属性，会有比较冗余的代码
import {mapState, mapGetters} from 'vuex';
//数组里是想要获取到状态的名字,函数执行，会返回计算属性的对象，相当于写到computed里
// console.log(mapState(['count']));

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
        // a () { .....  }
        //辅组函数,获取到store的计算属性
        ...mapGetters(['addCount', 'doubleCount']),
    },
    created () {
        console.log(this.$store.state.count);
    },
    methods: {
        handleClick () {
            this.$store.state.count++;
        }
    }
}
</script>