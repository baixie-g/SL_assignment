<template>
  <el-container class="common-layout" name="el-fade-in-linear" mode="out-in">
    <el-aside width="200px" v-show="!store.mobileOpenState || store.asideOpenState">
      <h3 class="aside-header">{{ users }}</h3>
      <div class="menu-items" >
        <el-menu  mode="vertical">
          <sidebar-item
              class="custom-item"
              v-for="(route, index) in childRoutes"
              :key="route.path + index"
              :item="route"
              base-path="/index"
          />
        </el-menu>
        <el-backtop :right="100" :bottom="100">回到顶部</el-backtop>
      </div>
    </el-aside>

    <el-container>
      <el-header
          height="auto"
          style="display: flex;flex-wrap: wrap;"
      >
        <el-button
            @click="toggleAsideOpenState"
            type="primary"
            v-show="store.mobileOpenState"
            style="left: 0;position: absolute;"
        >
          Aside
        </el-button>
        <div style="font-size: 24px;">
          天天向上!
        </div>
      </el-header>


      <el-main><router-view></router-view></el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>

  </el-container>
  <Footer />
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
// import Sidebar from "./components/Sidebar/index.vue";
import Footer from "@/layout/components/Footer.vue";
import {computed, ref, watch} from "vue";
import { useUserStore } from "@/store/modules/user";
import {mainStore} from "@/store";
import router from "@/router";
import SidebarItem from "@/layout/components/Sidebar/SidebarItem.vue";

const store = mainStore();
const userStore = useUserStore();


const drawer = ref(false);
const users = userStore.auth.user.username;
const { width } = useWindowSize();
const childRoutes = computed(() => getChildRoutes("/index"));

const toggleAsideOpenState = () => {
  store.asideOpenState = !store.asideOpenState;
};

function getChildRoutes(parentPath) {
  return router.options.routes.find((route) => route.path === parentPath)?.children || [];
}
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
