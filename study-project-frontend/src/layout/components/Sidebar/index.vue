<!--<template>-->
<!--  <div>-->
<!--&lt;!&ndash;    <logo v-if="showLogo" :collapse="isCollapse" />&ndash;&gt;-->
<!--    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">-->
<!--      <el-menu-->
<!--        :default-active="activeMenu"-->
<!--        :collapse="isCollapse"-->
<!--        :background-color="sideTheme === 'theme-dark' ? rgb(24, 25, 26) : rgb(255, 255, 255)"-->
<!--        :text-color="sideTheme === 'theme-dark' ? rgb(255, 255, 255) : rgb(0, 0, 0)"-->
<!--        :unique-opened="true"-->
<!--        :active-text-color="theme"-->
<!--        :collapse-transition="false"-->
<!--        mode="vertical"-->
<!--      >-->
<!--        <sidebar-item-->
<!--          v-for="(route, index) in sidebarRouters"-->
<!--          :key="route.path + index"-->
<!--          :item="route"-->
<!--          :base-path="route.path"-->
<!--        />-->
<!--      </el-menu>-->
<!--    </el-scrollbar>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--// import Logo from './Logo.vue'-->
<!--import SidebarItem from './SidebarItem.vue'-->
<!--import useAppStore from '@/store/modules/app'-->
<!--import useSettingsStore from '@/store/modules/settings'-->
<!--import {useRoute} from "vue-router";-->
<!--import {computed} from "vue";-->
<!--// import usePermissionStore from '@/store/modules/permission'-->

<!--const route = useRoute();-->
<!--const appStore = useAppStore()-->
<!--const settingsStore = useSettingsStore()-->
<!--// const permissionStore = usePermissionStore()-->

<!--// const sidebarRouters =  computed(() => permissionStore.sidebarRouters);-->
<!--const showLogo = computed(() => settingsStore.sidebarLogo);-->
<!--const sideTheme = computed(() => settingsStore.sideTheme);-->
<!--const theme = computed(() => settingsStore.theme);-->
<!--const isCollapse = computed(() => !appStore.sidebar.opened);-->

<!--const activeMenu = computed(() => {-->
<!--  const { meta, path } = route;-->
<!--  // if set path, the sidebar will highlight the path you set-->
<!--  if (meta.activeMenu) {-->
<!--    return meta.activeMenu;-->
<!--  }-->
<!--  return path;-->
<!--})-->

<!--</script>-->
<!-- Sidebar.vue -->

<!-- Sidebar.vue -->

<!--<template>-->
<!--  <div>-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>{{childRoutes}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-for="(route, index) in childRoutes" :key="route.path + index">{{route.path}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-for="(route, index) in childRoutes" :key="route.path + index">{{index}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-for="(route, index) in childRoutes" :key="route.path + index">{{route}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-for="(route, index) in childRoutes" :key="route.path + index">{{$route.path}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <div>+++</div>&ndash;&gt;-->

<!--    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">-->
<!--      <el-menu-->
<!--          :default-active="activeMenu"-->
<!--          mode="vertical"-->
<!--      >-->

<!--        <sidebar-item-->
<!--            v-for="(route, index) in childRoutes"-->
<!--            :key="route.path + index"-->
<!--            :item="route"-->
<!--            base-path="/index"/>-->
<!--      </el-menu>-->
<!--    </el-scrollbar>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import SidebarItem from './SidebarItem.vue'; // Adjust the path based on your project structure-->
<!--import router from "@/router/index.js"-->
<!--import {Key} from "@element-plus/icons-vue";-->
<!--export default {-->
<!--  components: {-->
<!--    Key,-->
<!--    SidebarItem-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      sideTheme: 'theme-dark', // You can change the default theme as needed-->
<!--      isCollapse: false,-->
<!--      activeMenu: '',-->
<!--      theme: ''-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    childRoutes() {-->
<!--      // 过滤出子路由-->
<!--      return router.options.routes.filter((route) => route.path === "/index")[0]-->
<!--          .children;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <el-scrollbar class="custom-scrollbar">
    <el-menu class="custom-menu" mode="vertical">
      <sidebar-item
          class="custom-item"
          v-for="(route, index) in childRoutes"
          :key="route.path + index"
          :item="route"
          base-path="/index"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem.vue'; // Adjust the path based on your project structure
import router from "@/router/index.js";
import { Key } from "@element-plus/icons-vue";

export default {
  components: {
    Key,
    SidebarItem,
  },
  data() {
    return {
      sideTheme: 'theme-dark', // You can change the default theme as needed
      isCollapse: false,
      activeMenu: '',
      theme: '',
    };
  },
  computed: {
    childRoutes() {
      // Use a separate method to get child routes for better readability
      return this.getChildRoutes("/index");
    },
  },
  methods: {
    getChildRoutes(parentPath) {
      // Filter child routes based on parent path
      return router.options.routes.find((route) => route.path === parentPath)?.children || [];
    },
  },
};
</script>

<style lang="scss">

.custom-scrollbar {
  height: 100%;
  overflow-y: auto;
  width: 100%; // 与父组件宽度一致
}

.custom-menu {
  background-color: transparent; // 背景透明
  //border: 1px solid #ddd; // 边框颜色
  border-radius: 8px; // 圆角
}

.custom-item {
  background-color: transparent; // 白底
  transition: background-color 0.3s; // 添加过渡效果
  //border: 1px solid #ddd; // 边框颜色
  border-radius: 8px; // 圆角
  margin-bottom: 8px; // 项之间的底部间距

  &:hover {
    background-color: rgba(255, 255, 255, 0.8); // hover时背景半透明
  }

}

</style>

