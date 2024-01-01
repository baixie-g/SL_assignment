<template>
  <div id="loader-wrapper" :class="store.imgLoadStatus ? 'loaded' : null">
    <div class="loader">
      <div class="loader8">
        <div class="cap"></div>
        <div class="line">LOADING</div>
      </div>
      <div class="loader-text">
        <span class="name">{{ siteName }}</span>
        <span class="tip">加载中</span>
      </div>
    </div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
const store = mainStore();
// 配置
const siteName = import.meta.env.VITE_SITE_NAME;
</script>

<style lang="scss" scoped>
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  .loader {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .loader8 {
      position: fixed;
      // top: 50%;
      left: 50%;
      z-index: 2;
      margin-bottom: 80px;
      transform: translate(-50%, -50%);
      text-align: center;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: default;

      .line {
        border-bottom: 5px solid #f2f2f2;
        overflow: hidden;
        width: 100%;
        animation: line 2s ease-in-out infinite;
        color: #f2f2f2;
        font-size: 4em;
        text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
          0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
          0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1),
          0 3px 5px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1),
          0 10px 10px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.15);
        box-shadow: inset 0px -5px 10px -7px rgba(0, 0, 0, 0.75),
          inset 0px 5px 10px -7px rgba(0, 0, 0, 0.75);
      }

      .cap {
        position: absolute;
        left: -1px;
        height: 100%;
        border-bottom: 5px solid #403833;
        animation: cap 2s ease-in-out infinite;
        background: #403833;
      }
    }

    .loader-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      z-index: 2;
      margin-top: 40px;
      font-size: 24px;

      .tip {
        margin-top: 6px;
        font-size: 18px;
        opacity: 0.6;
      }
    }
  }

  .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: #333;
    z-index: 1;

    &.section-left {
      left: 0;
    }

    &.section-right {
      right: 0;
    }
  }

  &.loaded {
    visibility: hidden;
    transform: translateY(-100%);
    transition: transform 0.3s 1s ease-out, visibility 0.3s 1s ease-out;

    .loader {
      .loader8,
      .loader-text {
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
    }

    .loader-section {
      &.section-left {
        transform: translateX(-100%);
        transition: transform 0.5s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &.section-right {
        transform: translateX(100%);
        transition: transform 0.5s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}

@keyframes line {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

@keyframes cap {
  0% {
    left: -1px;
  }
  50% {
    left: 100%;
  }
  100% {
    left: -1px;
  }
}
</style>
