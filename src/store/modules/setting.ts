import { defineStore } from 'pinia'
const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      //控制侧边栏伸缩
      fold: false,
    }
  },
})

export default useSettingStore
