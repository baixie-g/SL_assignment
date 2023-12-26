import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "@/store/modules/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',//name属性是路由的名称，可以在路由跳转时使用
      component: () => import('@/views/welcome/WelcomeView.vue'),
      children: [
        {
          path: '',
          name: 'welcome-login',
          component: () => import('@/views/welcome/components/LoginPage.vue')
        }, {
          path: 'register',
          name: 'welcome-register',
          component: () => import('@/views/welcome/components/RegisterPage.vue')
        }, {
          path: 'forget',
          name: 'welcome-forget',
          component: () => import('@/views/welcome/components/ForgetPage.vue')
        }
      ]
    }, {
      path: '/index',
      name: 'index',
      component: ()=> import('@/layout/index.vue'),
      children: [
        {
          path: '',
            name: 'index-home',
            component: ()=> import('@/views/homepage/HomePage.vue')
        }, {
          path: 'dashboard',
          name: 'index-dashboard',
          component: ()=> import('@/views/dashboard/Dashboard.vue')
        }, {
          path: 'missions',
            name: 'index-missions',
            component: ()=> import('@/views/missions/missions.vue')
        }, {
          path: 'userPage',
          name: 'index-userPage',
          component: ()=> import('@/views/userPage/UserPage.vue')
        }
      ]
    }, {
          path: '/why',
            name: 'why',
              component: () => import('@/views/IndexView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if(store.auth.user != null && to.name.startsWith('welcome-')) {
    next('/index')
  } else if(store.auth.user == null && to.fullPath.startsWith('/index')) {
    next('/')
  } else if(to.matched.length === 0){
    next('/index')
  } else {
    next()
  }
})

export default router
