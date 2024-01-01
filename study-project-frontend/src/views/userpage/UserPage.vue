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



<template>
  <div class="container">
    <h1>Vue Upload Image with Axios</h1>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="uploadImage">
          <div class="form-group">
            <label for="file">选择图片</label>
            <input type="file" class="form-control-file" id="file" accept="image/*" @change="onFileChange">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" :disabled="!selectedFile">上传</button>
          </div>
        </form>
        <div v-if="uploadProgress">
          <h3>上传进度</h3>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{width: uploadProgress + '%'}" :aria-valuenow="uploadProgress" aria-valuemin="0" aria-valuemax="100">{{uploadProgress}}%</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h3>图片预览</h3>
        <img :src="previewImage" class="img-fluid" v-if="previewImage" alt="error loading img">
      </div>
    </div>
    <div class="row" v-if="images.length > 0">
      <h3>已上传的图片</h3>
      <div class="col-md-4" v-for="image in images" :key="image.name">
        <div class="card">
          <img :src="image.url" class="card-img-top" alt="image.name">
          <div class="card-body">
            <h5 class="card-title"><a :href="image.url" target="_blank">{{image.name}}</a></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UploadFilesService from "@/utils/UploadFilesService.js";

export default {
  name: "UploadImage",
  data() {
    return {
      selectedFile: null,
      previewImage: null,
      uploadProgress: null,
      images: []
    };
  },
  methods: {
    onFileChange(e) {
      this.selectedFile = e.target.files[0];
      this.previewImage = URL.createObjectURL(this.selectedFile);
    },
    uploadImage() {
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      axios
          .post("/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
              this.uploadProgress = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
              );
            }
          })
          .then(() => {
            this.selectedFile = null;
            this.previewImage = null;
            this.uploadProgress = null;
            this.getImages();
          })
          .catch((err) => {
            console.error(err);
          });
    },
    getImages() {
      UploadFilesService.getFiles().then((response) => {
        this.images = response.data;
      });
    }
  },
  mounted() {
    this.getImages();
  }
};
</script>
