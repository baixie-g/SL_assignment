<template>
  <Loading />
  <background @loadComplete="loadComplete" />
  <router-view />
</template>

<script setup>
import { get } from "@/net";
import { useUserStore } from "@/store/modules/user";
import router from "@/router";
import Loading from "@/components/Loading.vue";
import { mainStore } from "@/store";
import Background from "@/components/Background.vue";
import { nextTick } from "vue";
import { helloInit } from "@/utils/getTime";
import cursorInit from "@/utils/cursor.js";
import { watch, onMounted, onBeforeUnmount } from "vue";
import config from "@/../package.json";
const store = mainStore();

const appStore = useUserStore();

if (appStore.auth.user == null) {
  get(
    "/api/user/me",
    (message) => {
      appStore.auth.user = message;
      router.push("/index");
    },
    () => {
      appStore.auth.user = null;
    }
  );
}

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};

// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
    // 欢迎提示
    helloInit();
    // 默哀模式
    // checkDays();
  });
};

// 监听宽度变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 990) {
      store.boxOpenState = false;
    }
  }
);

onMounted(() => {
  // 自定义鼠标
  cursorInit();

  // 屏蔽右键;
  document.oncontextmenu = () => {
    ElMessage({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
    });
    // return false;
  };

  // 鼠标中键事件
  window.addEventListener("mousedown", (event) => {
    if (event.button == 1) {
      store.backgroundShow = !store.backgroundShow;
      ElMessage({
        message: `已${store.backgroundShow ? "开启" : "退出"}壁纸展示状态`,
        grouping: true,
      });
    }
  });

  // 监听当前页面宽度
  getWidth();
  window.addEventListener("resize", getWidth);

  // 控制台输出
  const styleTitle1 =
    "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";
  const title1 = "G0J's Home";
  const title2 = `
'########:::::'###::::'####:'##::::'##:'####:'########:
 ##.... ##:::'## ##:::. ##::. ##::'##::. ##:: ##.....::
 ##:::: ##::'##:. ##::: ##:::. ##'##:::: ##:: ##:::::::
 ########::'##:::. ##:: ##::::. ###::::: ##:: ######:::
 ##.... ##: #########:: ##:::: ## ##:::: ##:: ##...::::
 ##:::: ##: ##.... ##:: ##::: ##:. ##::: ##:: ##:::::::
 ########:: ##:::: ##:'####: ##:::. ##:'####: ########:
........:::..:::::..::....::..:::::..::....::........::`;
  const content = `\n\n版本: ${config.version}\n主页: ${config.home}\nGithub: ${config.github}`;
  console.info(
    `%c${title1} %c${title2} %c${content}`,
    styleTitle1,
    styleTitle2,
    styleContent
  );
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getWidth);
});
</script>

<style scoped></style>
<!--意思是在这个文件中的所有样式都只在当前组件中生效，不会影响到其他组件-->
