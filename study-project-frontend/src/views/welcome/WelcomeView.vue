<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <div class="welcome-title">
        <div class="title-text">欢迎来到自律平台</div>
        <div class="subtitle-text">
          采取行动，有计划地生活，重要的是，它是根据你的想法而不是感觉来行动！
        </div>
        <div class="additional-text">清醒，自律，知进退，爱自己</div>
      </div>
    </div>
    <div class="welcome-component">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.welcome-content {
  max-width: 800px; /* 设置内容最大宽度，避免在大屏幕上内容过宽 */
  width: 100%;
  margin: 30px;
  color: white;
  text-shadow: 0 0 10px black;
  background-color: rgba(225, 255, 252, 0.2);
  border-radius: 25px;
  padding: 1%;
  backdrop-filter: blur(3px);
}

.title-text {
  font-size: 30px;
  font-weight: bold;
}

.subtitle-text {
  margin-top: 10px;
}

.additional-text {
  margin-top: 5px;
}

.welcome-component {
  margin: 30px;
  width: 100%;
  max-width: 400px; /* 设置卡片最大宽度 */
  padding: 20px;
  background-color: rgba(225, 255, 252, 0.7);
  border-radius: 25px;
  box-shadow: 0 0 10px black;
  backdrop-filter: blur(8px);
}

/* 响应式样式，根据屏幕宽度调整样式 */
@media screen and (max-width: 600px) {
  .welcome-container {
    flex-direction: column; /* 在小屏幕下切换为纵向排列 */
  }

  .welcome-content {
    margin: 10px;
  }

  .welcome-component {
    margin: 10px;
  }
}
</style>
