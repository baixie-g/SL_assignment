<template>
  <transition name="fade" mode="out-in">
    <ul class="bg-select-container" key="bg-select-container">
    <transition-group name="bg">
        <li
            class="bg-option"
            v-for="(bg,index) in backgroundImg"
            :key="index"
            :style="{background:`url(${bg.url}) center/cover no-repeat`}"
            @click="selectImg(index)">
        </li>
<!--      <li-->
<!--          class="bg-option"-->
<!--          :style="{background:`url(${bg.url}) center/cover no-repeat`}"-->
<!--          @click="selectImg(index)">-->
<!--      </li>-->
        <li class="add-bg" @click="upLoad" key="100000">
            +
            <input
                v-show="false"
                type="file"
                ref="upLoadImg"
                @change="upLoadChange"
                accept=".jpg, .jpeg, .png">
        </li>
    </transition-group>
  </ul>
  </transition>
</template>

<script lang="ts">
export default {
    name:'BaseLoginSettingBg'
}
</script>


<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useBackgroundStore } from '../store/modules/loginBg'
const backgroundImg = useBackgroundStore().backgroundImg;
import { fetchRandomBackground } from "../store/modules/randomBg.js";
import {onMounted} from "_vue@3.4.3@vue";
// fetchRandomBackground()
//     .then((url) => {
//       bgUrl.value = url;
//     })
//     .catch((error) => {
//       console.error("Failed to fetch random background: " + error);
//       // Set a default image URL in case of error
//       bgUrl.value = "https://pic3.zhimg.com/v2-20762436952fce864a924cdd33d4eadc_r.jpg?source=1940ef5c";
//     });
const upLoadImg = ref();
// onMounted(() => {
//   selectImg(0)
// });
function upLoad(){
    upLoadImg.value.click()
}
function upLoadChange(){
  const img = upLoadImg.value.files[0];
  if(img){
    if(img.type.indexOf('image') == -1){
      ElMessage.error('请上传格式为jpg、jpeg、png的图片');
      return;
    }
    const name = img.name;
    // const url = { default: URL.createObjectURL(img) };
    const url = URL.createObjectURL(img);
    backgroundImg.push({
      url,
      name,
      active:false
    })
  }
}
function selectImg(index:number){
    useBackgroundStore().changeActive(index)
}


</script>

<style scoped>
/* 所有背景容器 */
.bg-select-container{
    width: 730px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-flow: row wrap;
    overflow-y: scroll;
}
/* 隐藏滚动条 */
.bg-select-container::-webkit-scrollbar{
    display: none;
}
/* 每个背景选项 */
.bg-select-container>.bg-option{
    flex: 0 0 350px;
    height: 160px;
    box-sizing: border-box;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 5px solid #B5E2E5;
    cursor: pointer;
    transition: all 1s;
}
.bg-select-container>.bg-option:nth-last-child(2){
    margin-bottom: 0;
}
/* 添加背景项 */
.add-bg{
    flex: 0 0 350px;
    height: 160px;
    /* margin-bottom: 30px; */
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #d7d7d7;
    border: 3px dashed #d7d7d7;
    cursor: pointer;
    transition: all 1s;
}
</style>
