//自己手写路由
class VueRouter {

} 

// 给VueRouter添加install方法
// install执行的时候，vue会传递一个参数，参数就是Vue
VueRouter.install = Vue => {
    console.log(Vue)
}


export default VueRouter;

