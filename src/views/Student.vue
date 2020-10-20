<template>
    <div class="student">
        <student-add />
        <hr>
        <student-list />
    </div>
</template>
<script>
// 假如StudentAdd需要通过很多层级，才能找到，我们可以直接用@代表src，例如：
// import StudentAdd from '@/components/StudentAdd';
import StudentAdd from '../components/StudentAdd';
import StudentList from '../components/StudentList';
export default {
    components: {
        StudentAdd,
        StudentList,
    }
    
}
</script>
<style scoped>

</style>