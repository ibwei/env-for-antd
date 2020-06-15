<template>
  <div class="register-email">
    <a-form-model :model="emailForm" :rules="emailFormRules" ref="emailForm">
      <a-form-model-item prop="email" class="register-form-item">
        <a-input
          v-model="emailForm.email"
          placeholder="请输入邮箱"
          class="item"
          :maxlength="40"
          :minlength="3"
        ></a-input>
      </a-form-model-item>
      <a-form-model-item prop="passwordA" class="register-form-item">
        <a-input-password
          v-model="emailForm.passwordA"
          :show-password="true"
          autocomplete="new-password"
          placeholder="请设置6--18位密码"
          :maxlength="18"
          :minlength="6"
        ></a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="passwordB" class="register-form-item">
        <a-input-password
          v-model="emailForm.passwordB"
          :show-password="true"
          autocomplete="new-password"
          placeholder="请再次确认密码"
          :maxlength="18"
          :minlength="6"
        ></a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="code" class="register-form-item">
        <a-input
          v-model="emailForm.code"
          placeholder="邮箱验证码"
          :maxlength="10"
          style="width: 280px;"
        ></a-input>
        <count-down url="REGISTER" :width="120" :onTap="sendCode"></count-down>
      </a-form-model-item>
      <a-form-model-item class="register-form-item" prop="inviteCode">
        <a-input
          v-model="emailForm.inviteCode"
          placeholder="邀请码（可以从客服或者已注册用户处获取）"
        ></a-input>
      </a-form-model-item>
      <a-form-model-item prop="read" class="register-form-item">
        <div class="form-item-actions">
          <a-checkbox v-model="emailForm.read">
            我已阅读并同意
            <router-link target="_blank" class="colorBlue" :to="{ name: 'Content' }">
              《注册协议》
            </router-link>
            条款
          </a-checkbox>
        </div>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          :loading="loadingRegister"
          class="login-btn"
          @click="handleRegister"
        >
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import mixin from '@/mixins/user'
import CountDown from '@/views/components/CountDown'
import { isEmail, isMobileCode, isPass } from '@/utils/validate'
export default {
  name: 'RegisterEmail',
  mixins: [mixin],
  components: {
    CountDown
  },
  data() {
    const validateEmail = async (rule, value, callback) => {
      const res = await this.$Network.LoginService.validatemobile({
        account: value
      })
      if (res) {
        callback()
      } else {
        callback(new Error('邮箱已注册'))
      }
    }
    const validatePasswordB = (rule, value, callback) => {
      if (this.emailForm.passwordA !== value) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      loadingRegister: false,
      isRead: false,
      emailForm: {
        email: '997132391@qq.com',
        passwordA: 'qq997132391',
        passwordB: 'qq997132391',
        code: '',
        inviteCode: '',
        read: false
      },
      emailFormRules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {
            required: true,
            pattern: isEmail,
            message: '请输入正确的邮箱地址',
            trigger: ['change', 'blur']
          },
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        passwordA: [
          { required: true, message: '请设置密码', trigger: 'blur' },
          {
            required: true,
            pattern: isPass,
            message: '请设置6-18位密码',
            trigger: 'change'
          }
        ],
        passwordB: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            required: true,
            pattern: isPass,
            message: '请输入6-18位密码',
            trigger: 'change'
          },
          { required: true, validator: validatePasswordB, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            required: true,
            pattern: isMobileCode,
            message: '请输入正确的验证码',
            trigger: 'change'
          }
        ],
        read: [
          { required: true, message: '请阅读《注册协议》', trigger: 'blur' },
          {
            required: true,
            pattern: /true/,
            message: '请勾选已阅读《注册协议》',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created() {
    const { parentId, type, value } = this.$route.query
    this.emailForm.email = type === 'email' ? value : ''
    parentId && (this.emailForm.inviteCode = parentId)
  },
  methods: {
    sendCode: function () {
      return new Promise((resolve, reject) => {
        this.$refs.emailForm.validateField('email', async (error) => {
          if (!error) {
            const res = await this.$Network.LoginService.sendCode(this.emailForm.email, 'REGISTER')
            if (res) {
              resolve(res)
            } else {
              reject(error)
            }
          } else {
            reject(error)
          }
        })
      })
    },
    handleRegister: async function () {
      this.$refs.emailForm.validate(async (valid) => {
        if (valid) {
          this.loadingRegister = true
          const params = {
            mobile: this.emailForm.email,
            password: this.emailForm.passwordB,
            mobileVcode: this.emailForm.code,
            parentId: this.emailForm.inviteCode
          }
          const res = await this.$Network.LoginService.register(params)
          this.loadingRegister = false
          if (res) {
            this.$message.success('注册成功')
            this.$router.push({
              path: '/user/login',
              query: {
                account: this.emailForm.email
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.register-email {
  height: 100%;
  width: 100%;
  .title {
    font-size: 24px;
    color: #333333;
    margin-bottom: 26px;
    margin-right: 112px;
    padding-bottom: 17px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid $loginText;
      color: $loginText;
    }
  }
  .title-active {
    border-bottom: 2px solid $loginText;
    color: $loginText;
  }
  .register-form-item {
    margin-bottom: 30px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
