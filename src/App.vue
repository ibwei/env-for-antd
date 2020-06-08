<template>
  <a-config-provider :locale="locales[$store.state.app.language]">
    <div id="app">
      App.js
      <a-date-picker />
      {{ $t('hello') }}
      <a-button @click="changeLang('zhCN')">中文</a-button>
      <a-button @click="changeLang('en')">English</a-button>

      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import { locales, setLang } from './i18n/index'
export default {
  name: 'App',
  data() {
    return {
      locales
    }
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
<style lang="scss" scoped></style>
