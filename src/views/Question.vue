<template>
    <div class="question" 
        v-if="question"
    >
        <div class="main">问题：{{ question.title }}</div>
        <div class="other" >
            <div v-for="other in otherQuestionList"
                :key="other.id"
                :class="other.type"
                :title="other.title"
                @click="handleClick(other.id)"
            >{{ other.title }}</div>
            <!-- title是提示信息，鼠标放到该元素上显示的提示信息 -->
            <!-- <div class="prev" :title="question.prev">{{ question.prev }}</div>
            <div class="next" :title="question.next">{{ question.next }}</div> -->
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: [String, Number],
        },
        // name: {
        //     type: String,
        //     default: 'question',
        // }
    },
    data () {
        return {
            question: null,
        }
    },
    //同一个组件，只会调用一次mouted
    mounted () { //挂载的时候执行
        // this.getData();     
        console.log(this.id);
        // console.log(this.name);   
    },
    computed: {
        otherQuestionList () {
            const arr = [];
            if (this.question.prev) { //prev存在
                const {prev, prevId} = this.question;
                arr.push({
                    type: 'prev',
                    title: prev,
                    id: prevId
                })
            }
            if(this.question.next) {//next存在
                const {next, nextId} = this.question;
                arr.push({
                    type: 'next',
                    title: next,
                    id: nextId
                })
            }
            return arr;
        }
    },
    methods: {
        handleClick (id) {
            // const {name} = this.$route;
            // const {name} = this;
            this.$router.push({
                // name,
                name : 'question',
                params: {
                    id,
                }
            });
        },
        getData () {
            // 拿到参数的对象id的值
            // console.log(this.$route.params);
            // const { id } = this.$route.params;
            const {id} = this;

            this.$axios.get(`/question/${id}`).then(res => {
                // console.log(res);
                this.question = res;
            })
        }
    },
    // 用侦听器，监控$route的值的变化
    watch: {
        '$route': {
            handler () {
                // console.log('watch');
                this.getData();
            },
            // 立即执行函数，这里设置之后，可以不用在mounted上调用了
            immediate: true,
        }
    }
}
</script>
<style scoped>
.main{
    margin-bottom: 200px;
}
.prev{
    float: left;
}
.next{
    float: right;
}
.prev,
.next {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3385ff;
    text-decoration: underline;
    cursor: pointer;
}
</style>