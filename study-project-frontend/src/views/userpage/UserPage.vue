<template>
  <!-- 基本信息 -->
  <div class="message">
    <!-- Logo -->
    <div class="logo">
      <img class="logo-img" :src="siteLogo" alt="logo" />
      <div :class="{ name: true, 'text-hidden': true, long: true }">
        <span class="bg">郭灵杰</span>
      </div>
    </div>
    <!-- 简介 -->
    <div class="description cards" @click="changeBox">
      <div class="content">
        <div class="text">
          <p>{{ descriptionText.hello }}</p>
          <p v-for="(item, index) in descriptionText.text" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
    <socialLinks />
  </div>
</template>

<script setup>
import { mainStore } from "../../store/";
import {computed, h, reactive, watch} from "vue";
import {ElMessage} from "element-plus";
import socialLinks from "./component/SocialLinks.vue";
const store = mainStore();

// 主页站点logo
const siteLogo = import.meta.env.VITE_SITE_ANTHORIMG;
// 站点链接
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_SITE_URL;

  return url.split(".");
});

// 简介区域文字
const descriptionText = reactive({
  logoName: import.meta.env.VITE_SITE_NAME,
  hello: import.meta.env.VITE_DESC_HELLO,
  text: import.meta.env.VITE_DESC_TEXT.split("|"),
});

// 切换右侧功能区
const changeBox = () => {
  if (store.getInnerWidth >= 990) {
    store.boxOpenState = !store.boxOpenState;
  } else {
    ElMessage({
      message: "当前页面宽度不足以开启盒子",
      grouping: true,
      icon: h(Error, {
        theme: "filled",
        fill: "#efefef",
      }),
    });
  }
};

// 监听状态变化
watch(
    () => store.boxOpenState,
    (value) => {
      if (value) {
        descriptionText.hello = import.meta.env.VITE_DESC_HELLO_OTHER;
        descriptionText.text = import.meta.env.VITE_DESC_TEXT_OTHER;
      } else {
        descriptionText.hello = import.meta.env.VITE_DESC_HELLO;
        descriptionText.text = import.meta.env.VITE_DESC_TEXT;
      }
    },
);
</script>

<style lang="scss" scoped>
.message {
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: fade 0.5s;
    .logo-img {
      border-radius: 50%;
      width: 120px;
    }
    .name {
      width: calc(460px - 120px);
      padding-left: 22px;
      transform: translateY(-8px);
      font-family: "Pacifico-Regular";

      .bg {
        font-size: 5rem;
      }

      .sm {
        margin-left: 6px;
        font-size: 2rem;
        @media (min-width: 720px) and (max-width: 789px) {
          display: none;
        }
      }
    }
    @media (max-width: 768px) {
      .logo-img {
        width: 100px;
      }
      .name {
        height: 128px;
        .bg {
          font-size: 4.5rem;
        }
      }
    }
  }

  .description {
    padding: 1rem;
    margin-top: 3.5rem;
    max-width: 460px;
    animation: fade 0.5s;

    .content {
      display: flex;
      justify-content: space-between;

      .text {
        margin: 0.75rem 1rem;
        line-height: 2rem;
        margin-right: auto;

        p {
          &:nth-of-type(1) {
            font-family: "Pacifico-Regular";
          }
        }
      }

      .xicon:nth-of-type(2) {
        align-self: flex-end;
      }
    }
    @media (max-width: 720px) {
      max-width: 100%;
      pointer-events: none;
    }
  }
  @media (max-width: 390px) {
    .logo {
      flex-direction: column;
      .logo-img {
        display: none;
      }
      .name {
        margin-left: 0;
        height: auto;
        transform: none;
        text-align: center;
        .bg {
          font-size: 3.5rem;
        }
        .sm {
          font-size: 1.4rem;
        }
      }
    }
    .description {
      margin-top: 2.5rem;
    }
  }
}
</style>
