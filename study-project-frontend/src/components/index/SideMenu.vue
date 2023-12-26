<template>
  <div class="side-menu">
    <el-menu
        default-active="defaultActive" @select="handleSelect"
        style="width: 170px">
      <el-menu-item index="homepage">
        <i class="el-icon-menu"></i>
        <span slot="title">homepage</span>
      </el-menu-item>
      <el-menu-item index="dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">dashboard</span>
      </el-menu-item>
      <el-menu-item index="userpage">
        <i class="el-icon-menu"></i>
        <span slot="title">userpage</span>
      </el-menu-item>

    </el-menu>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        defaultActive: 'homepage' // 默认选中项
      };
    },
    methods: {
      handleSelect(index) {
        this.$emit('navigate', index); // 触发导航事件，通知父组件进行路由跳转
      }
    }
  }
</script>

<style>
.side-menu {
  width: 200px;
  height: 100%;
}
</style>
