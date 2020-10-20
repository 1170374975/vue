<template>
    <div class="About">
        关于-内容
        <div id="a">aaaaaaa</div>
        <router-link tag="div" to="/" class="link">回首页</router-link>
    </div>
</template>
<script>
export default {
    mounted () {
        // console.log(this.$route.meta);
    }
}
</script>
<style scoped>
#a{
    margin-top: 1000px;
}
.link{
    margin-top: 1000px;
    margin-bottom: 100px;
}

</style>
