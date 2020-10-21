export default {
    strict: true,//设置vuex严格模式，不能在Mutation之外更改状态
    state: {
        studentList: [],//存放学生列表
    },
    getters: {//store的计算属性,相当于组件的computed
        studentLength: state => state.studentList.length,
        // 未成年列表,年龄小于18的学生,从列表里过滤出来,生成新的数组
        studentJuveniles: state => state.studentList.filter(student => student.age < 18),
    },
}