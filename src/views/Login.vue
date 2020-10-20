<template>
    <div class="login">
        <button @click="handleClick">{{ btnText }}</button>
    </div>
</template>

<script>
// 引入登录文件
import auth from '../utils/auth'

export default {
    data () {
        return {
            isLogin: auth.isLogin(),
        }
    },
    methods: {
        handleClick () {
            // document.cookie = 'login=true';
            if(this.isLogin) {
                //取消登录
                auth.cancelLogin();
            } else {
                auth.login(); //登录
                this.goBack();//回到原来的页面
            }
            this.isLogin = !this.isLogin;//更新isLogin的值
        },
        goBack () {//登录成功
            const isGoBack = window.confirm('登录成功，要回到原来的页面吗?');
            if(isGoBack) {
                this.$router.go(-1); //回退一页
            }
        }
    },
    computed: {
        btnText () {
            return this.isLogin ? '取消登录' : '登录';
        }
    }
}
</script>