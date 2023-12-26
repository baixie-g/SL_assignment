import {reactive} from 'vue'// 引入reactive,用于创建响应式对象,类似于data,但是可以在任何地方使用,不需要在setup中声明,也不需要在模板中声明,直接使用即可,不需要使用this,直接使用对象名即可,但是需要使用解构赋值,否则会报错,因为reactive返回的是一个对象,而不是一个对象的属性
import { defineStore } from 'pinia'
import {get, post} from "@/net";
// 引入defineStore,用于创建store,类似于vuex中的store,但是不需要在main.js中引入,直接在组件中使用即可,不需要使用this,直接使用对象名即可,不需要使用解构赋值,因为defineStore返回的是一个对象的属性,而不是一个对象
export const useUserStore = defineStore('store', {
    state: () => ({
        auth: {
            user: null
        }
    }),
    actions: {
        // login(userInfoForm) {
        //     return new Promise((resolve, reject) => {
        //         post('/api/auth/login', {
        //             username: userInfoForm.username,
        //             password: userInfoForm.password,
        //             remember: userInfoForm.remember
        //         }, (message) => {
        //             get('/api/user/me', (userinfo) => {
        //                 this.user = userinfo;
        //                 resolve({
        //                     success: true,
        //                     message: message,
        //                     userinfo
        //                 });
        //             }, () => {
        //                 this.user = null;
        //                 reject('Failed to fetch user information');
        //             });
        //         }, () => {
        //             this.user = null;
        //             reject('Login failed');
        //         });
        //     });
        // }
    }
});


