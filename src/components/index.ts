//引入全局组件
import SvgIcon from './SvgIcon/index.vue'
import Navigator from './Navigator/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGloblComponent: any = { SvgIcon, Navigator }
//对外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGloblComponent).forEach((key) => {
      app.component(key, allGloblComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
