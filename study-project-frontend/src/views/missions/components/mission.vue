<!-- mission.vue -->

<template>
  <div class="mission" @click="$emit('click', data)">
    <!-- 显示任务的内容 -->
    <div>{{ data.title }}</div>
    <div>{{ data.description }}</div>
    <div>{{ data.urgency }}</div>
    <div>{{ data.importance }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object, // 接收任务数据
  },
};
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.mission {
  /* 样式 */
}
</style>
