<template>
  <el-container class="common-layout" name="el-fade-in-linear" mode="out-in">
    <el-aside width="200px">
      <h3 class="aside-header">{{users}}</h3>
      <div class="content">
        <sidebar/>
        <el-backtop :right="100" :bottom="100">回到顶部</el-backtop>
      </div>
    </el-aside>

    <el-container style="width: 70vh">
      <el-header height="auto" style="background: linear-gradient(to right, #409eff, #67c23a);">
        <h1 style="text-align:center; color:#fff; line-height: 60px;">My App</h1>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>

</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import Sidebar from "./components/Sidebar/index.vue";
import { ref, watch } from "vue";
import {useUserStore} from "@/store/modules/user";
const store = useUserStore()

const drawer = ref(false);

const { width } = useWindowSize();

// Responsive behavior for sidebar
watch(width, () => {
  if (width.value > 768) {
    drawer.value = false;
  }
});

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
<style lang="scss">
.common-layout {
  height: 100vh;
}
</style>
