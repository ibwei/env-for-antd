<template>
  <a-config-provider :locale="locales[$store.state.app.language]">
    <div id="app">
      <loader :spinning="$store.__s('spinning')" fullScreen></loader>
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
  methods: {
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
