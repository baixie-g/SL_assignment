## 前后端分离项目

包含基本的登录、注册、密码重置等等功能，内部含有个人简介功能.
* 登录功能（支持用户名、邮箱登录）
* 注册用户（通过邮箱注册）
* 重置密码（通过邮箱重置密码）

登录与router功能：
1. 用户登录成之后，才能访问index路径下的页面
2. 用户如果没有登录，那么会自动跳转到登录界面
3. 如果用户请求的是一个压根就不存在的页面，依然强制回到登录界面，如果已经登录，那么回到index首页

切换背景功能:
1. 单击鼠标中键点击设置进行选择

## 前端运行方式
1. 安装依赖
```
npm install
```
2. 运行
```
npm run dev
```

### 前端运行环境
1. nodejs
```
+-- @element-plus/icons-vue@2.3.1
+-- @icon-park/vue-next@1.4.2
+-- @vitejs/plugin-vue@4.1.0
+-- @vueuse/core@10.6.1
+-- axios@1.3.5
+-- chart.js@4.4.1(未使用)
+-- element-plus@2.4.3
+-- js-cookie@3.0.5
+-- pinia@2.0.34
+-- sass@1.69.5
+-- unplugin-auto-import@0.15.2
+-- unplugin-vue-components@0.24.1
+-- vite@4.2.1
+-- vue-axios@3.5.2
+-- vue-chartjs@5.3.0
+-- vue-cli-plugin-element-plus@0.0.13
+-- vue-router@4.1.6
`-- vue@3.2.47
```

## 后端运行环境
1. idea
2. jdk 18
3. maven
4. mysql(后续)
5. springboot
6. redis

