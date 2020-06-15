<template>
  <userform-layout width="450px">
    <template #form>
      <div class="register-card">
        <a-tabs default-active-key="1" size="large" @change="tabChange">
          <a-tab-pane key="1" tab="手机注册">
            <register-mobile></register-mobile>
          </a-tab-pane>
          <a-tab-pane key="2" tab="邮箱注册">
            <register-email></register-email>
          </a-tab-pane>
        </a-tabs>
        <a-button @click="navToLogin" style="width: 100%; margin-top: 10px;">去登陆</a-button>
      </div>
    </template>
  </userform-layout>
</template>

<script>
import UserformLayout from '@/Layout/UserformLayout'
import RegisterEmail from './RegisterEmail'
import RegisterMobile from './RegisterMobile'
// import store from '@/store'

export default {
  name: 'Register',
  components: {
    RegisterEmail,
    RegisterMobile,
    UserformLayout
  },
  /* beforeRouteEnter(to, from, next) {
    if (store.getters['user/isLogin']) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }, */
  data() {
    return {
      registerType: 'mobile'
    }
  },
  created() {
    const data = this.$route.query
    if (data.type) {
      this.registerType = data.type
    }
  },
  methods: {
    tabChange(e) {
      this.registerType = e === 1 ? 'mobile' : 'email'
    },
    navToLogin() {
      this.$router.push('/user/login')
    }
  }
}
</script>

<style scoped lang="less">
.register-card {
  height: 100%;
  padding: 30px 40px;
  .register-tabs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 20px;
      color: #333333;
      padding-bottom: 17px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
      &:hover {
        color: $activeColor;
      }
      &::before {
        content: '';
        position: absolute;
        height: 2px;
        background: $activeColor;
        width: 100%;
        display: block;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transform: scaleX(0);
      }
      &:hover::before {
        transform: scaleX(1);
        transition: 0.2s all linear;
      }
    }
    .title-active {
      color: $loginText;
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        background: $activeColor;
        width: 100%;
        display: block;
        bottom: 0;
      }
    }
  }
}
</style>
