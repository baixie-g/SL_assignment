<template>
    <div style="width: 100vw;height: 100vh;overflow: hidden;display: flex">
        <div style="flex: 1">
            <el-image style="width: 100%;height: 100%" fit="cover"
                      src="https://fc.sinaimg.cn/mw1024/006yt1Omgy1hijn8iqnwxj30uk0p2anx.jpg"/>

        </div>
        <div class="welcome-title">
            <div style="font-size: 30px;font-weight: bold">欢迎来到自律平台</div>
            <div style="margin-top: 10px">采取行动,有计划地生活，重要的是，它是根据你的想法而不是感觉来行动!</div>
            <div style="margin-top: 5px">清醒，自律，知进退，爱自己</div>
        </div>
      <div style="width: 400px;z-index: 1" class="welcome-component">
        <router-view v-slot="{ Component }">
          <transition name="el-fade-in-linear" mode="out-in">
            <component :is="Component" style="height: 100%"/>
          </transition>
        </router-view>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.welcome-title {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    text-shadow: 0 0 10px black;
}
.welcome-component {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: rgba(225, 255, 255, 0.7);
    border-radius: 25px;
    box-shadow: 0 0 10px black;
}

</style>
