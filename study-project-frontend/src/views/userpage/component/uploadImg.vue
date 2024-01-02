<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import axios from "axios";-->
<!--import { useUserStore } from "@/store/modules/user";-->
<!--const store = useUserStore();-->

<!--const users = store.auth.user.username;-->
<!--const email = store.auth.user.email;-->
<!--const avatar = "http://www.w3.org/2000/svg"; // Default avatar-->

<!--const uploadPhoto = () => {-->
<!--  const fileInput = this.$refs.fileInput;-->
<!--  fileInput.click();-->
<!--};-->

<!--const handleImageChange = async (event) => {-->
<!--  const file = event.target.files[0];-->

<!--  try {-->
<!--    const formData = new FormData();-->
<!--    formData.append("file", file);-->

<!--    // Replace 'YOUR_BACKEND_URL' with the actual URL of your Spring Boot backend endpoint-->
<!--    const response = await axios.post("YOUR_BACKEND_URL/upload", formData, {-->
<!--      headers: {-->
<!--        "Content-Type": "multipart/form-data",-->
<!--      },-->
<!--    });-->

<!--    // Assuming the backend responds with the new avatar URL-->
<!--    store.setAvatar(response.data.avatarUrl);-->
<!--  } catch (error) {-->
<!--    console.error("Error uploading photo:", error);-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="upload-image">-->
<!--    <div class="upload-image__container">-->
<!--      <div class="upload-image__preview">-->
<!--        <div class="upload-image__preview__image">-->
<!--          <img :src="previewImage" alt="" />-->
<!--        </div>-->
<!--        <div class="upload-image__preview__progress">-->
<!--          <el-progress-->
<!--            :percentage="uploadProgress"-->
<!--            text-inside-->
<!--            stroke-width="18"-->
<!--            color="#409EFF"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="upload-image__upload">-->
<!--        <el-upload-->
<!--          class="upload-image__upload__input"-->
<!--          :action="uploadImage"-->
<!--          :show-file-list="false"-->
<!--          :on-change="onFileChange"-->
<!--        >-->
<!--          <el-button type="primary" size="small">选择图片</el-button>-->
<!--        </el-upload>-->
<!--        <el-button-->
<!--          class="upload-image__upload__button"-->
<!--          type="primary"-->
<!--          size="small"-->
<!--          :disabled="!selectedFile"-->
<!--          @click="uploadImage"-->
<!--        >-->
<!--          上传图片-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="upload-image__list">-->
<!--      <div class="upload-image__list__item" v-for="image in images" :key="image.id">-->
<!--        <img :src="image.url" alt="" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.upload-image {-->
<!--  width: 100%;-->
<!--  max-width: 800px;-->
<!--  margin: 0 auto;-->
<!--}-->

<!--.upload-image__container {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--}-->

<!--.upload-image__preview {-->
<!--  width: 100%;-->
<!--  max-width: 400px;-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.upload-image__preview__image {-->
<!--  width: 100%;-->
<!--  height: 0;-->
<!--  padding-bottom: 100%;-->
<!--  position: relative;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.upload-image__preview__image img {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  object-fit: cover;-->
<!--}-->

<!--.upload-image__preview__progress {-->
<!--  width: 100%;-->
<!--}-->

<!--.upload-image__upload {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--}-->

<!--.upload-image__upload__input {-->
<!--  margin-right: 10px;-->
<!--}-->

<!--.upload-image__upload__button {-->
<!--  margin-left: 10px;-->
<!--}-->

<!--.upload-image__list {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--  justify-content: center;-->
<!--}-->

<!--.upload-image__list__item {-->
<!--  width: 100px;-->
<!--  height: 100px;-->
<!--  margin: 10px;-->
<!--  overflow: hidden;-->
<!--  border-radius: 5px;-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--.upload-image__list__item img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--}-->


<!--</style>-->


<!--<template>-->
<!--  <div class="user-profile">-->
<!--    <div class="avatar-container" @click="uploadPhoto">-->
<!--      <input type="file" ref="fileInput" style="display: none" @change="handleImageChange" />-->
<!--      <img :src="avatar" alt="User Avatar" class="avatar" />-->
<!--      <div class="overlay">-->
<!--        <span class="upload-text">Click to Upload</span>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="user-info">-->
<!--      <h2 class="name">{{ users }}</h2>-->
<!--      <p class="email">{{ email }}</p>-->
<!--      <p class="ip">IP Address: 192.168.1.1</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import axios from "axios";-->
<!--import { useUserStore } from "@/store/modules/user";-->
<!--const store = useUserStore();-->

<!--const users = store.auth.user.username;-->
<!--const email = store.auth.user.email;-->
<!--const avatar = "http://www.w3.org/2000/svg"; // Default avatar-->

<!--const uploadPhoto = () => {-->
<!--  const fileInput = this.$refs.fileInput;-->
<!--  fileInput.click();-->
<!--};-->

<!--const handleImageChange = async (event) => {-->
<!--  const file = event.target.files[0];-->

<!--  try {-->
<!--    const formData = new FormData();-->
<!--    formData.append("file", file);-->

<!--    // Replace 'YOUR_BACKEND_URL' with the actual URL of your Spring Boot backend endpoint-->
<!--    const response = await axios.post("YOUR_BACKEND_URL/upload", formData, {-->
<!--      headers: {-->
<!--        "Content-Type": "multipart/form-data",-->
<!--      },-->
<!--    });-->

<!--    // Assuming the backend responds with the new avatar URL-->
<!--    store.setAvatar(response.data.avatarUrl);-->
<!--  } catch (error) {-->
<!--    console.error("Error uploading photo:", error);-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Your existing styles remain unchanged */-->
<!--</style>-->



<!--<template>-->
<!--  <div class="container">-->
<!--    <h1>Vue Upload Image with Axios</h1>-->
<!--    <div class="row">-->
<!--      <div class="col-md-6">-->
<!--        <form @submit.prevent="uploadImage">-->
<!--          <div class="form-group">-->
<!--            <label for="file">选择图片</label>-->
<!--            <input type="file" class="form-control-file" id="file" accept="image/*" @change="onFileChange">-->
<!--          </div>-->
<!--          <div class="form-group">-->
<!--            <button type="submit" class="btn btn-primary" :disabled="!selectedFile">上传</button>-->
<!--          </div>-->
<!--        </form>-->
<!--        <div v-if="uploadProgress">-->
<!--          <h3>上传进度</h3>-->
<!--          <div class="progress">-->
<!--            <div class="progress-bar" role="progressbar" :style="{width: uploadProgress + '%'}" :aria-valuenow="uploadProgress" aria-valuemin="0" aria-valuemax="100">{{uploadProgress}}%</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-md-6">-->
<!--        <h3>图片预览</h3>-->
<!--        <img :src="previewImage" class="img-fluid" v-if="previewImage" alt="error loading img">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row" v-if="images.length > 0">-->
<!--      <h3>已上传的图片</h3>-->
<!--      <div class="col-md-4" v-for="image in images" :key="image.name">-->
<!--        <div class="card">-->
<!--          <img :src="image.url" class="card-img-top" alt="image.name">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title"><a :href="image.url" target="_blank">{{image.name}}</a></h5>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--import UploadFilesService from "@/utils/UploadFilesService.js";-->

<!--export default {-->
<!--  name: "UploadImage",-->
<!--  data() {-->
<!--    return {-->
<!--      selectedFile: null,-->
<!--      previewImage: null,-->
<!--      uploadProgress: null,-->
<!--      images: []-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    onFileChange(e) {-->
<!--      this.selectedFile = e.target.files[0];-->
<!--      this.previewImage = URL.createObjectURL(this.selectedFile);-->
<!--    },-->
<!--    uploadImage() {-->
<!--      let formData = new FormData();-->
<!--      formData.append("file", this.selectedFile);-->
<!--      axios-->
<!--          .post("/upload", formData, {-->
<!--            headers: {-->
<!--              "Content-Type": "multipart/form-data"-->
<!--            },-->
<!--            onUploadProgress: (progressEvent) => {-->
<!--              this.uploadProgress = Math.round(-->
<!--                  (progressEvent.loaded * 100) / progressEvent.total-->
<!--              );-->
<!--            }-->
<!--          })-->
<!--          .then(() => {-->
<!--            this.selectedFile = null;-->
<!--            this.previewImage = null;-->
<!--            this.uploadProgress = null;-->
<!--            this.getImages();-->
<!--          })-->
<!--          .catch((err) => {-->
<!--            console.error(err);-->
<!--          });-->
<!--    },-->
<!--    getImages() {-->
<!--      UploadFilesService.getFiles().then((response) => {-->
<!--        this.images = response.data;-->
<!--      });-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.getImages();-->
<!--  }-->
<!--};-->
<!--</script>-->
