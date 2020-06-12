<template>
  <div class="login">
    <p class="title">欢迎登录迪富</p>
    <a-form :model="formLogin" :rules="rules" style="width: 400px;" ref="formLogin">
      <a-form-item prop="account" class="login-form-item">
        <a-input v-model="formLogin.account" placeholder="请输入手机号/邮箱" class="item" :maxlength="255" :minlength="6"></a-input>
      </a-form-item>
      <a-form-item prop="password" class="login-form-item">
        <a-input v-model="formLogin.password" :show-password="true" autocomplete="new-password" placeholder="登录密码" :maxlength="255" :minlength="6"></a-input>
      </a-form-item>
      <a-form-item prop="isVerify" class="login-form-item">
        <sliderValidation @handleSuccess="getVerify"></sliderValidation>
      </a-form-item>
      <a-form-item class="login-form-item">
        <a-checkbox v-model="isRemenber">记住用户名</a-checkbox>
      </a-form-item>
      <a-form-item class="login-form-item">
        <a-button type="primary" :loading="loadingLogin" class="login-btn" @click="handleSubmit">
          登录
        </a-button>
      </a-form-item>
      <a-form-item class="login-form-item">
        <router-link tag="span" class="link-btn" :to="{ name: 'Password' }">
          忘记密码？
        </router-link>
        <router-link tag="span" class="link-btn" :to="{ name: 'Register' }">
          免费注册？
        </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import SliderValidation from '@/views/components/SliderValidation.vue'
import { isMobile, isEmail } from '@/utils/validate'
import store from '@/store'

export default {
  name: 'Login',
  components: {
    SliderValidation
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters['user/isLogin']) {
      next({ name: 'Home' })
    } else {
      next()
    }
  },
  data() {
    const validateVerify = (rule, value, callback) => {
      if (!this.formLogin.isVerify) {
        callback(new Error('请拖动滑块验证'))
      } else {
        callback()
      }
    }
    const accountVerify = (rule, value, callback) => {
      if (!value) callback(new Error('请输入账号'))
      if (!isMobile.test(value) && !isEmail.test(value)) {
        callback(new Error('账号格式不正确'))
      } else {
        callback()
      }
    }
    const passwordLength = (rule, value, callback) => {
      if (value.length > 18 || value.length < 6) {
        callback(new Error('请输入6-18位密码'))
      } else {
        callback()
      }
    }
    return {
      loadingLogin: false,
      loadingCode: false,
      isRemenber: false,
      CountdownService: {},
      formLogin: {
        account: '',
        password: '',
        isVerify: ''
      },
      rules: {
        account: [{ validator: accountVerify, trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            validator: passwordLength,
            trigger: 'blur'
          }
        ],
        isVerify: [{ validator: validateVerify, trigger: 'blur' }]
      }
    }
  },
  created() {
    // const user_login = getStorage('user_login')
    // if (user_login) {
    //   this.formLogin.account = user_login
    //   this.isRemenber = true
    // }
    // 从登陆页面跳转过来
    const account = this.$route.query.account
    if (account) {
      this.formLogin.account = account
    }
  },
  computed: {
    userInfo: (vm) => vm.$store.__s('user.userInfo')
  },
  methods: {
    // ...mapMutations('user', ['updateUserToken', 'updateUserInfo']),
    handleSubmit: function () {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.loadingLogin = true
          this.login()
        }
      })
    },
    async login() {
      try {
        console.log('hh')
        /* const params = {
          account: this.formLogin.account,
          password: this.formLogin.password
        }
        const res = await this.$Network.LoginService.login(params)
         if (this.isRemenber) {
          this.('user_login', this.formLogin.account)
        } else {
          setStorage('user_login', '')
        }
        if (res && res.data) {
          const { uri } = this.$route.query
          this.$store.__s('user.token', res.data.tokenResultBO)
          this.$store.__s('user', res.data.userMain)
          if (uri) {
            window.location.href = uri
          } else {
            this.$router.push('Home')
          }
        } */
      } catch (error) {
        console.log(error)
      }

      this.loadingLogin = false
    },
    getVerify() {
      this.formLogin.isVerify = true
    }
  }
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  padding: 90px 120px 0;
  .title {
    font-size: 24px;
    color: #333333;
    margin-bottom: 55px;
  }
  .login-form-item {
    margin-bottom: 30px;
  }
  .login-btn {
    width: 100%;
  }
  .link-btn {
    margin-right: 36px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
