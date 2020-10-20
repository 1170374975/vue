<template>
    <div class="student-list">
        <div>学生总人数: {{ studentLength }}</div>
        <hr>
        <div>学生列表：</div>
        <ul>
            <li
                v-for="student in studentList"
                :key="student.name"
            >姓名：{{student.name}} 年龄：{{student.age}}</li>
        </ul>
        <hr>
        <div>未成年学生列表:</div>
        <ul>
            <li v-for="stu in studentJuveniles"
                :key="stu.name"
            >姓名: {{ stu.name }} 年龄: {{ stu.age }}</li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex';

export default {
    //获取studentList的值
    computed: {
        ...mapState(['studentList']),
        ...mapGetters(['studentLength', 'studentJuveniles'])
    },
}
</script>
<style scoped>
li , 
div{
    margin-bottom: 15px;
}
</style>
