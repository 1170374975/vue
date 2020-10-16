<template>
  <div id="app">
    <div class="nav-box">
      <div class="logo" @click="handleClick">渡一教育</div>
      <!-- 声明式的导航，进行跳转 -->
      <!-- <router-link to="/home" tag="div" class="logo">渡一教育</router-link> -->
      <div class="nav-list">
        <router-link to="/home">首页</router-link>
        <router-link to="/learn">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  methods: {
    handleClick () {
      console.log(this.$router); //VueRouter
      //$router.push()  添加跳转
      this.$router.push('/home');
      // $router.replace()//替换跳转
      // this.$router.replace('/home');
      // $router.go(n)输入1，前进1步记录，输入-2,后退2步记录
      // this.$router.go(-1);
    },
  }
}
</script>
<style scoped>
  @import url('./assets/reset.css');
  .nav-box{
    display: flex;
    justify-content: space-around;
    height: 100px;
    line-height: 100px;
    background-color: #3385ff;
    color: #fff;
  }
  .nav-list a{
    margin-left: 40px;
    color: #fff;
    text-decoration: none;
  }
  .nav-list a.router-link-active{
    font-weight: bold;
  }
  .container {
    margin-top: 60px;
    margin-left: 200px;
  }
</style>

