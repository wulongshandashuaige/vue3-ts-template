import { defineStore } from 'pinia'
const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      //控制侧边栏伸缩
      fold: false,
      //控制刷新
      refsh: false,
    }
  },
})

export default useSettingStore
