<!-- MissionDetails.vue -->

<template>

  <div class="mission-details">
    <h2>Mission Details</h2>
    <!-- 显示任务详细信息 -->
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
    <p>Urgency: {{ data.urgency }}</p>
    <p>Importance: {{ data.importance }}</p>

    <!-- 提供关闭按钮 -->
<!--    <close class="close" @click="$emit('close')" />-->

    <transition name="el-fade-in-linear">
      <close-one
          class="close"
          theme="filled"
          size="28"
          fill="#ffffff60"
          @click="$emit('close')"
      />
    </transition>
    <transition name="el-fade-in-linear">
      <setting-two
          class="setting"
          theme="filled"
          size="28"
          fill="#ffffff60"
      />
    </transition>
  </div>
</template>

<script>

import { CloseOne, SettingTwo } from "@icon-park/vue-next";
import {Close, CloseSmall} from "@icon-park/vue-next";

export default {
  components: {Close , CloseSmall , CloseOne, SettingTwo},
  props: {
    data: Object, // 接收任务数据
  },
};
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.mission-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.43);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.close,
.setting {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 28px;
  height: 28px;
  transition:
      transform 0.3s,
      opacity 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
}

.setting {
  right: 56px;
}

.content {
  padding: 30px;
  width: 100%;
  height: 100%;
}
</style>
