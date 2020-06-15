<template>
  <a-config-provider :locale="locales[$store.state.app.language]">
    <div id="app">
      <loader :spinning="!$store.__s('spinning')" fullScreen></loader>
      <app-layout />
    </div>
  </a-config-provider>
</template>

<script>
import AppLayout from './Layout/AppLayout'
import Loader from './views/components/Loader/index.vue'
import { locales } from './i18n/index'

export default {
  name: 'App',
  data() {
    return {
      locales
    }
  },
  components: {
    AppLayout,
    Loader
  },
  created() {
    this.initRender()
  },
  methods: {
    /**
     * @todo 每次应用启动前初始化渲染,获取本地 token，没有 token 直接跳转登录页面
     * @todo 如果有 token，则用 token 获取用户信息，如果token过期，也自动跳转登录页面
     */
    async initRender() {
      this.$store.__s('spinning', true)
      const user = this.$store.__s('user')
      if (user.token) {
        this.$store.__s('spinning', false)
      } else {
        this.$router.push('/user/login')
      }
    },
    getNode(node) {
      if (node) {
        return node.parentNode
      }
      return document.body
    }
  },
  i18n: {
    messages: {
      zhCN: {
        hello: '你好',
        h: '黄色'
      }
    }
  }
}
</script>
<style lang="less">
@import url('./App.less');
@import url('./styles/global');
</style>
