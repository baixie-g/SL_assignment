<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>

</template>

<script setup>
import {get} from "@/net";
import {ElMessage} from "element-plus";
import router from "@/router";
import {useUserStore} from "@/store/modules/user";

const store = useUserStore()

const logout = () => {
    get('/api/auth/logout', (message) => {
        ElMessage.success(message)
        store.auth.user = null
        router.push('/')
    })
}
const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<style scoped>
</style>
<!--  <div>-->
<!-- 左侧边导航栏 -->
<!--    <side-menu @navigate="navigateTo" />-->

<!-- 主内容区域 -->
<!--    <div>-->
<!--      欢迎{{store.auth.user.username}}进入到学习平台-->
<!--    </div>-->
<!--    <div>-->
<!--      <el-button @click="logout()" type="danger" plain>退出登录</el-button>-->
<!--    </div>-->

<!-- 动态显示的子组件 -->
<!--    <router-view v-slot="{ Component }">-->
<!--      <transition name="el-fade-in-linear" mode="out-in">-->
<!--        <component :is="Component" style="height: 100%"/>-->
<!--      </transition>-->
<!--    </router-view>-->
<!--  </div>-->
