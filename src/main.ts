import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore忽略类型检测
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
//引入pinia
import pinia from './store'
//引入全局组件
import gloalComponent from '@/components'
//引入全局样式
import '@/styles/index.scss'
//引入路由
import router from './router'
//引入路由鉴权文件
import '@/permission'
const app = createApp(App)
//安装自定义插件
app.use(gloalComponent)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.use(pinia)
app.mount('#app')
