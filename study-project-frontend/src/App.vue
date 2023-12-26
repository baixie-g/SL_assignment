<script setup>
import {get} from "@/net";
import {useUserStore} from "@/store/modules/user";
import router from "@/router";

const store = useUserStore()

if(store.auth.user == null) {
    get('/api/user/me', (message) => {
        store.auth.user = message
        router.push('/index')
    }, () => {
        store.auth.user = null
    })
}
</script>

<template>
  <router-view/>
<!--  //这里是路由的出口,所有的路由都会在这里显示,也就是说,这里是所有组件的父组件,所以,在这里,我们可以把这个组件当做一个容器,在这里,我们可以放置一些公共的组件,比如导航栏,底部栏等等,这样,我们就可以在每个页面中使用这些公共的组件了-->
</template>

<style scoped>

</style>
<!--意思是在这个文件中的所有样式都只在当前组件中生效，不会影响到其他组件-->
