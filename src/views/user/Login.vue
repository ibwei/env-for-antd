<template>
  <userform-layout>
    <template #form>
      <div>
        <p class="title">欢迎登录迪富</p>
        <a-form-model :model="formLogin" :rules="rules" style="width: auto;" ref="formLogin">
          <a-form-model-item label="" prop="account" class="login-form-item">
            <a-input
              class="item"
              :maxLength="255"
              placeholder="请输入手机号/邮箱"
              v-model="formLogin.account"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item label="" class="login-form-item" prop="password">
            <a-input-password
              class="item"
              :maxLength="255"
              placeholder="登录密码"
              v-model="formLogin.password"
            ></a-input-password>
          </a-form-model-item>
          <a-form-model-item prop="isVerify" class="login-form-item">
            <slider-validation @handleSuccess="getVerify"></slider-validation>
          </a-form-model-item>
          <a-form-model-item class="login-form-item">
            <a-checkbox v-model="isRemenber">记住用户名</a-checkbox>
          </a-form-model-item>
          <a-form-model-item class="login-form-item">
            <a-button
              type="primary"
              :loading="loadingLogin"
              class="login-btn"
              @click="handleSubmit"
            >
              登录
            </a-button>
          </a-form-model-item>
          <a-form-model-item class="login-form-item">
            <router-link tag="span" class="link-btn" :to="{ name: 'password' }">
              忘记密码？
            </router-link>
            <router-link tag="span" class="link-btn" :to="{ name: 'register' }">
              免费注册？
            </router-link>
          </a-form-model-item>
        </a-form-model>
      </div>
    </template>
  </userform-layout>
</template>

<script>
import SliderValidation from '@/views/components/SliderValidation.vue'
import { isMobile, isEmail } from '@/utils/validate'
import UserformLayout from '@/Layout/UserformLayout'
import Store from '@/store'

export default {
  name: 'Login',
  components: {
    SliderValidation,
    UserformLayout
  },
  beforeRouteEnter(to, from, next) {
    if (Store.__s('user.login')) {
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
        account: '18483641399',
        password: 'z123456',
        isVerify: false
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
    handleSubmit() {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.loadingLogin = true
          this.login()
        } else {
          this.$message.warning('请按照提示输入')
        }
      })
    },
    async login() {
      try {
        const params = {
          account: this.formLogin.account,
          password: this.formLogin.password
        }
        const res = await this.$Network.LoginService.login(params)
        if (this.isRemenber) {
          this.$store.__s('remenberList', this.formLogin)
        }
        if (res && res.data) {
          console.log(res)
          const { uri } = this.$route.query
          this.$store.__s('user.token', res.data.tokenResultBO)
          this.$store.__s('user.userInfo', res.data.userMain)
          this.$store.__s('user.login', true)
          if (uri) {
            window.location.href = uri
          } else {
            window.location.replace('/')
          }
        }
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
</style>
