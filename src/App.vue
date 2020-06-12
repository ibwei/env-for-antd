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
import { locales, setLang } from './i18n/index'

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
    setTimeout(() => {
      this.$store.__s('spinning', true)
    }, 1000)
  },
  methods: {
    getNode(node) {
      if (node) {
        return node.parentNode
      }
      return document.body
    },
    changeLang(type) {
      setLang(type)
    },
    sayHello() {
      this.$message.success('你好')
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
<style lang="less" scoped></style>
