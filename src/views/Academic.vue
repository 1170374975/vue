<template>
    <ul>
        <router-link tag="li"
            v-for="(question) in questionList"
            :key="question.id"
            :to="{name: 'question', params: { id : question.id }}"
        > {{ question.title }} </router-link>
    </ul>
</template>

<script>

export default {
    data () {
        return {
            questionList: []
        }
    },
    mounted () {
        // console.log(this.$axios);
        // 因为设置了请求拦截器，给url后面加上.json，这里的地址后面就不用写成question.json了
        this.$axios.get('/question').then(res => {
            console.log(res);
            this.questionList = res;
        });
    },
}
</script>

<style scoped>
li{
    margin-bottom: 15px;
    cursor: pointer;
}
li:hover{
    color: #3385ff;
    /* 设置下划线 */
    text-decoration: underline;
}
</style>
