<template>
  <div :class="store.backgroundShow ? 'cover show' : 'cover'">
    <img
      v-show="store.imgLoadStatus"
      class="bg"
      alt="Dynamic Image"
      :src="backgroundStore.ActiveImg"
      @load="imgLoadComplete"
      @error.once="imgLoadError"
      @animationend="imgAnimationEnd"
    />
    <div :class="store.backgroundShow ? 'gray hidden' : 'gray'" />
    <div class="bgChoose">
      <transition name="fade" mode="out-in">
        <setting-two
            v-if="store.backgroundShow "
            class="settingBtn"
            theme="filled"
            size="28"
            fill="#ffffff60"
            @click="fold = !fold"
        />
      </transition>
      <Transition name="fade" mode="out-in">
        <a
            v-if="store.backgroundShow"
            class="down"
            :href="backgroundStore.ActiveImg"
            target="_blank"
        >下载壁纸
        </a>
      </Transition>

    </div>

    <transition name="shade">
      <div class="shade" v-if="fold &&store.backgroundShow" @click="fold = false"></div>
    </transition>

    <transition name="set" v-if="fold &&store.backgroundShow">
      <div class="setting-container">
        <div class="setting-content">
          <transition name="set-content" mode="out-in">
            <BaseLoginSettingBg @close="fold = false" />
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import {Error, SettingTwo} from "@icon-park/vue-next";
import {h, onBeforeUnmount, onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import BaseLoginSettingBg from "./bgSetting.vue";

const store = mainStore();
const imgTimeout = ref(null);
const emit = defineEmits(["loadComplete"]);
import {useBackgroundStore} from "../store/modules/loginBg";
const fold = ref(false);
const backgroundStore = useBackgroundStore();

// 图片加载完成
const imgLoadComplete = () => {
  imgTimeout.value = setTimeout(
    () => {
      store.setImgLoadStatus(true);
      console.log("壁纸加载完成");
    },
    Math.floor(Math.random() * (600 - 300 + 1)) + 300,
  );
};

// 图片动画完成
const imgAnimationEnd = () => {
  console.log("壁纸加载且动画完成");
  // 加载完成事件
  emit("loadComplete");
};

// 图片显示失败
const imgLoadError = () => {
  console.error("壁纸加载失败：", store.coverTypeUrl);
  ElMessage({
    message: "壁纸加载失败，已临时切换回默认",
    icon: h(Error, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
  store.coverTypeUrl = `https://pic3.zhimg.com/v2-20762436952fce864a924cdd33d4eadc_r.jpg?source=1940ef5c`;
};



onBeforeUnmount(() => {
  clearTimeout(imgTimeout.value);
});
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  z-index: -1;

  &.show {
    z-index: 1;
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    filter: blur(20px) brightness(0.3);
    transition:
      filter 0.3s,
      transform 0.3s;
    animation: fade-blur-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.45s;
  }
  .gray {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.2) 100%),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.1) 166%);

    transition: 1.5s;
    &.hidden {
      opacity: 0;
      transition: 1.5s;
    }
  }
  .bgChoose{
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .down {
    font-size: 16px;
    color: white;
    padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }
    &:active {
      transform: scale(1);
    }
  }
  .settingBtn {
    font-size: 16px;
    color: white;
    //padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }
    &:active {
      transform: scale(1);
    }
  }




  /* 设置按钮过渡动画 */
  .setting-show{
    transform: rotate(90deg);
  }
  /* 遮罩 */
  .shade {
    position: absolute;
    z-index: 2; // Increase z-index value
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
  /* 遮罩过渡动画 */
  .shade-enter-from,.shade-leave-to{
    opacity: 0;
  }
  .shade-enter-active,.shade-leave-active{
    transition: all 0.4s;
  }

  /* 设置模块容器 */
  .setting-container{
    position: absolute;
    z-index: 10;
    left: calc(50% - 500px);
    bottom:calc(50% - 300px);
    display: flex;
    width: 1000px;
    height: 600px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    box-shadow: -2px -2px 2px rgba(255, 255, 255, 0.5),4px 4px 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
  /* 设置的内容 */
  .setting-container>.setting-content{
    width: 100%;
    height: 100%;
    padding: 30px;
  }

}
</style>
