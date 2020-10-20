<template>
    <div class="student">学员展示-内容</div>
</template>

// <script>
// export default {
//     // 组件内守卫：
//     // 路由进入之前调用， 
//     beforeRouteEnter(to, from, next) {
//         // console.log('beforeRouteEnter');
//         // console.log(this);//undefined，不能使用this

//         //调用axios发送请求
//         // this.$axios
//         next( vm => {
//             //next中函数的调用在mounted之后：为了确保能对组件实例的完整访问
//             // console.log(vm.name);
//         });
//     },
//     // 在当前路由改变时，并且该组件被复用时调用，可以通过this访问实例
//     // 动态路由间互相跳转  或  路由query变更
//     beforeRouteUpdate(to, from, next) {
//         // console.log('update');
//         next();
//     },
//     // 导航离开该组件的对应路由时调用，可以访问组件实例this
//     beforeRouteLeave(to, from, next) {
//         // console.log('beforeRouteLeave');
//         next();
//     },
//     data () {
//         return {
//             name: 'student',
//         }
//     }
// }
// </script>