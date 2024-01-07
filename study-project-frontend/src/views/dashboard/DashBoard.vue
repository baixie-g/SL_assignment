<template>
  <div class="task-list">
    <div v-for="(task, index) in tasks" :key="index" class="task-module">
      <h3>{{ task.name }}</h3>
      <el-progress
          type="dashboard"
          :percentage="task.percentage"
          :color="task.color"
      />
      <div>
        <el-button-group>
          <el-button :icon="Minus" @click="decrease(task)" />
          <el-button :icon="Plus" @click="increase(task)" />
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'

const tasks = ref([
  { name: '登录认证记录', percentage: 10, color: '#f56c6c' },
  { name: '后端用户分发', percentage: 0, color: '#e6a23c' },
  { name: 'mysql设计', percentage: 20, color: '#5cb87a' },
  { name: '向后存储实现', percentage: 30, color: '#1989fa' },
])

const increase = (task) => {
  task.percentage += 10
  if (task.percentage > 100) {
    task.percentage = 100
  }
}

const decrease = (task) => {
  task.percentage -= 10
  if (task.percentage < 0) {
    task.percentage = 0
  }
}
</script>

<style scoped>
.task-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
}

.task-module {
  margin: 10px;
  width: 300px;
}
.task-module h3 {
  margin-bottom: 10px;
}
</style>
