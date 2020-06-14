import VueRouter, { Route } from 'vue-router'
import { AxiosInstance } from 'axios'
import { Message } from 'ant-design-vue/types/message'
import { Store } from 'vuex'

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
