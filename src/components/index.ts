import SvgIcon from './SvgIcon/index.vue'
import Navigator from './Navigator/index.vue'
const allGloblComponent:any = {SvgIcon,Navigator}

export default {
    install(app:any){

        Object.keys(allGloblComponent).forEach(key=>{
            console.log(123)
            app.component(key,allGloblComponent[key])
        })
    }
}