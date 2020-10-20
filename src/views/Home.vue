<template>
    <div class="home">首页-内容
        <button @click="handleClick">增加</button>
        {{ count }}
    </div>
</template>



<script>
// 如果需要用到的数据特别多，每个都用计算属性，会有比较冗余的代码
import {mapState} from 'vuex';
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
        ...mapState(['count']),
        // a () { .....  }
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