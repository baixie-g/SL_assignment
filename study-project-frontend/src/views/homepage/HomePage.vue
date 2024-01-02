<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      featuredItems: [-->
<!--        {-->
<!--          title: '精致时间管理',-->
<!--          description: '掌握时间的艺术，提高效率，轻松完成任务。',-->
<!--          image: 'https://up.qqya.com/files/2020/20_1770.jpg',-->
<!--          alt: '时间管理'-->
<!--        },-->
<!--        {-->
<!--          title: '锻炼自律力',-->
<!--          description: '培养坚定的决心，克服拖延，迈向成功的道路。',-->
<!--          image: 'https://up.qqya.com/files/2020/20_1775.jpg',-->
<!--          alt: '自律'-->
<!--        },-->
<!--        {-->
<!--          title: '智慧任务安排',-->
<!--          description: '有效规划，合理安排，轻松迎接每一个挑战。',-->
<!--          image: 'https://up.qqya.com/files/2020/20_1771.jpg',-->
<!--          alt: '任务安排'-->
<!--        }-->
<!--      ],-->
<!--      hoveredItem: null-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleMouseOver(index) {-->
<!--      this.hoveredItem = index;-->
<!--    },-->
<!--    handleMouseOut() {-->
<!--      this.hoveredItem = null;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<script>
import {get} from "@/net";
import router from "@/router";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      featuredItems: [
        // {
        //   title: '精致时间管理',
        //   description: '掌握时间的艺术，提高效率，轻松完成任务。',
        //   image: 'https://up.qqya.com/files/2020/20_1770.jpg',
        //   alt: '时间管理'
        // },
        // {
        //   title: '锻炼自律力',
        //   description: '培养坚定的决心，克服拖延，迈向成功的道路。',
        //   image: 'https://up.qqya.com/files/2020/20_1775.jpg',
        //   alt: '自律'
        // },
        // {
        //   title: '智慧任务安排',
        //   description: '有效规划，合理安排，轻松迎接每一个挑战。',
        //   image: 'https://up.qqya.com/files/2020/20_1771.jpg',
        //   alt: '任务安排'
        // }
      ],
    };
  },
  mounted() {
    this.fetchFeaturedItems();
  },
  methods: {
    async fetchFeaturedItems() {
      get('/api/featured-items', (message) => {
        this.featuredItems = message;
        console.log(message)
      }, (message) => {
        ElMessage.warning('获取home信息失败')
      })
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="hero-section">
      <h1 class="title">发现自律之美</h1>
      <p class="subtitle">在有序的日子里，找到时间的奇迹</p>
      <router-link to="/why" class="explore-button">开始探索</router-link>
    </div>

    <div class="featured-section">
      <div
          class="featured-item"
          v-for="(item, index) in featuredItems"
          :key="index"
      >
        <img
            :src="item.image"
            :alt="item.alt"
            class="featured-image"
        />
        <div class="text-content">
          <h2 class="featured-title">{{ item.title }}</h2>
          <p class="featured-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  text-align: center;
}

.hero-section {
  padding: 80px 20px;
  background-color: transparent;
}

.title {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  color: #ececec;
  margin-bottom: 30px;
}

.explore-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: #3367d6;
}

.featured-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;
}

.featured-item {
  width: 30%;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
transition: transform 0.3s ease-in-out;
  }

  .text-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
  }

  .featured-title {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #000000;
  }

  .featured-description {
    font-size: 1em;
    color: #666;
  }
  .featured-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }

  .featured-item:hover .featured-image {
    transform: scale(1.8); // 图像放大效果
  }
}
</style>
