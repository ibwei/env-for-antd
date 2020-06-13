<template>
  <div class="main-app">
    <home-layout v-if="c_login" />
    <router-view v-else></router-view>
  </div>
</template>

<script>
import HomeLayout from './HomeLayout'
export default {
  components: {
    HomeLayout
  },
  computed: {
    c_login: (vm) => vm.$store.__s('user.login')
  }
}
</script>

<style lang="less" scoped>
.main-app {
  min-height: 100vh;
}
</style>
