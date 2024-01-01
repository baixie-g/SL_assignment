<!--<template>-->
<!--  <div v-if="!item.hidden">-->
<!--    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">-->
<!--      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path, onlyOneChild.query)">-->
<!--        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">-->
<!--          <svg-icon :icon-class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"/>-->
<!--          <template #title><span class="menu-title" :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span></template>-->
<!--        </el-menu-item>-->
<!--      </app-link>-->
<!--    </template>-->

<!--    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>-->
<!--      <template v-if="item.meta" #title>-->
<!--        <svg-icon :icon-class="item.meta && item.meta.icon" />-->
<!--        <span class="menu-title" :title="hasTitle(item.meta.title)">{{ item.meta.title }}</span>-->
<!--      </template>-->

<!--      <sidebar-item-->
<!--        v-for="child in item.children"-->
<!--        :key="child.path"-->
<!--        :is-nest="true"-->
<!--        :item="child"-->
<!--        :base-path="resolvePath(child.path)"-->
<!--        class="nest-menu"-->
<!--      />-->
<!--    </el-sub-menu>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { isExternal } from '@/utils/validate'-->
<!--import AppLink from './Link.vue'-->
<!--import { getNormalPath } from '@/utils/selfdef'-->

<!--const props = defineProps({-->
<!--  // route object-->
<!--  item: {-->
<!--    type: Object,-->
<!--    required: true-->
<!--  },-->
<!--  isNest: {-->
<!--    type: Boolean,-->
<!--    default: false-->
<!--  },-->
<!--  basePath: {-->
<!--    type: String,-->
<!--    default: ''-->
<!--  }-->
<!--})-->

<!--const onlyOneChild = ref({});-->

<!--function hasOneShowingChild(children = [], parent) {-->
<!--  if (!children) {-->
<!--    children = [];-->
<!--  }-->
<!--  const showingChildren = children.filter(item => {-->
<!--    if (item.hidden) {-->
<!--      return false-->
<!--    } else {-->
<!--      // Temp set(will be used if only has one showing child)-->
<!--      onlyOneChild.value = item-->
<!--      return true-->
<!--    }-->
<!--  })-->

<!--  // When there is only one child router, the child router is displayed by default-->
<!--  if (showingChildren.length === 1) {-->
<!--    return true-->
<!--  }-->

<!--  // Show parent if there are no child router to display-->
<!--  if (showingChildren.length === 0) {-->
<!--    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }-->
<!--    return true-->
<!--  }-->

<!--  return false-->
<!--}-->

<!--function resolvePath(routePath, routeQuery) {-->
<!--  if (isExternal(routePath)) {-->
<!--    return routePath-->
<!--  }-->
<!--  if (isExternal(props.basePath)) {-->
<!--    return props.basePath-->
<!--  }-->
<!--  if (routeQuery) {-->
<!--    let query = JSON.parse(routeQuery);-->
<!--    return { path: getNormalPath(props.basePath + '/' + routePath), query: query }//这里的query是为了在SideMenu.vue中点击不同的分类时，显示不同的书籍-->
<!--  }-->
<!--  return getNormalPath(props.basePath + '/' + routePath)-->
<!--}-->

<!--function hasTitle(title){-->
<!--  if (title.length > 5) {-->
<!--    return title;-->
<!--  } else {-->
<!--    return "";-->
<!--  }-->
<!--}-->
<!--</script>-->

<!-- SidebarItem.vue -->

<template>
  <div class="sidebar-item" >
    <router-link :to="`${basePath}/${item.path}`">
      <p class="item-content">{{ item.path }}</p>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    }
  },
};
</script>
<style>
.item-content {
  padding: 10px;
  font-size: 20px;
  color: #7cf1fc;
}
.sidebar-item {
  margin-bottom: 10px;
  //border: 1px solid #7cf1fc;
  border-radius: 5px;
  background-color: rgba(30, 30, 30, 0.3);
  padding: 0 1px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(30, 30, 30, 0.5);
  }
}
</style>
