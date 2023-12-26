<!-- mission-details.vue -->

<template>
  <div class="mission-details">
    <!-- 显示任务详细信息 -->
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
    <p>Urgency: {{ data.urgency }}</p>
    <p>Importance: {{ data.importance }}</p>

    <!-- 提供关闭按钮 -->
    <button @click="$emit('close')">Close</button>
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
.mission-details {
  /* 样式 */
}
</style>
