import VueRouter, { Route } from 'vue-router'
import { AxiosInstance } from 'axios'
import { Store } from 'vuex'
import { Message } from 'ant-design-vue/types/message'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $axios: AxiosInstance
    $usb: any
    $store: Store<any>
    $message: Message
  }
}
