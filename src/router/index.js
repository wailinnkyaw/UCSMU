import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.use(VueRouter)
Vue.use(VueQrcodeReader)

const routes = [
    {
        path: '/',
        component: HelloWorld
    }
]

const router = new VueRouter({
    routes
})

export default router