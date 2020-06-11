<template>
  <a-config-provider :locale="locales[$store.state.app.language]">
    <div id="app">
      <home-page />
    </div>
  </a-config-provider>
</template>

<script>
import HomePage from './Layout/HomePage'
import { locales, setLang } from './i18n/index'
export default {
  name: 'App',
  data() {
    return {
      locales
    }
  },
  components: {
    HomePage
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
