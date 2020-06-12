<template>
  <div class="login">
    <div class="login-content">
      <a-card size="small" style="width: 350px; padding: 0 30px;">
        <slot></slot>
      </a-card>
    </div>
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
  min-height: 100vh;
  background: url('../../assets/login-bg.png') top center no-repeat;
  .login-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 24px;
    color: #333333;
    margin: 30px 0;
    text-align: center;
  }
  .login-form-item {
    margin-bottom: 15px;
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
