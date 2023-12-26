<template>
    <div style="text-align: center;margin: 0 20px">
        <div style="margin-top: 150px">
            <div style="font-size: 25px;font-weight: bold">登录</div>
            <div style="font-size: 14px;color: grey">在进入系统之前请先输入用户名和密码进行登录</div>
        </div>
        <div style="margin-top: 50px">
            <el-input v-model="userInfoForm.username" type="text" placeholder="用户名/邮箱">
                <template #prefix>
                    <el-icon><User /></el-icon>
                </template>
            </el-input>
            <el-input v-model="userInfoForm.password" type="password" style="margin-top: 10px" placeholder="密码" @keyup.enter="login">
                <template #prefix>
                    <el-icon><Lock /></el-icon>
                </template>
            </el-input>
        </div>
        <el-row style="margin-top: 5px">
            <el-col :span="12" style="text-align: left">
                <el-checkbox v-model="userInfoForm.remember" label="记住我"/>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <el-link @click="router.push('/forget')">忘记密码？</el-link>
            </el-col>
        </el-row>
        <div style="margin-top: 40px">
            <el-button @click="login()" style="width: 270px" type="success" plain>立即登录</el-button>
        </div>
        <el-divider>
            <span style="color: grey;font-size: 13px">没有账号</span>
        </el-divider>
        <div>
            <el-button style="width: 270px" @click="router.push('/register')" type="warning" plain>注册账号</el-button>
        </div>
    </div>
</template>

<script setup>
import {User, Lock} from '@element-plus/icons-vue'
import {reactive} from "vue";
import {ElMessage} from "element-plus";
import {get, post} from "@/net";
import router from "@/router";
import {useUserStore} from "@/store/modules/user";

const store = useUserStore()

const userInfoForm = reactive({//reactive是vue3的响应式函数,用于将一个对象转换成响应式对象,这样,当对象中的属性发生变化时,就会触发视图的更新,和ref不同的是,ref是将一个基本类型的数据转换成响应式数据,而reactive是将一个对象转换成响应式对象
    username: '',
    password: '',
    remember: false
})
// const login = async () => {
//   if (!userInfoForm.username || !userInfoForm.password) {
//     ElMessage.warning('请填写用户名和密码！')
//   } else {
//     const result = await store.login(userInfoForm)
//
//     // Handle the login result, e.g., redirect to index page on success
//     if (result.success) {
//       ElMessage.success(result.message);
//       // Redirect to index page
//       router.push('/index'); // Replace '/index' with your actual index page path
//     } else {
//       // Handle login failure, e.g., show an error message
//       console.error(result.message);
//     }
//   }
// }
const login = () => {
  if(!userInfoForm.username || !userInfoForm.password) {
    ElMessage.warning('请填写用户名和密码！')
  } else {
    post('/api/auth/login', {
      username: userInfoForm.username,
      password: userInfoForm.password,
      remember: userInfoForm.remember
    }, (message) => {
      ElMessage.success(message)
      get('/api/user/me', (message) => {
        store.auth.user = message
        router.push('/index')
      }, () => {
        store.auth.user = null
      })
    })
  }
}

</script>

<style scoped>

</style>
