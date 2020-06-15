<template>
  <div class="register-mobile">
    <a-form-model :model="mobileForm" :rules="mobileFormRules" ref="mobileForm">
      <a-form-model-item prop="mobile" class="register-form-item">
        <a-input
          v-model="mobileForm.mobile"
          placeholder="请输入手机号码"
          class="item"
          :maxlength="16"
          :minlength="11"
        ></a-input>
      </a-form-model-item>
      <a-form-model-item prop="passwordA" class="register-form-item">
        <a-input-password
          v-model="mobileForm.passwordA"
          :show-password="true"
          autocomplete="new-password"
          placeholder="请设置6--18位密码"
          :maxlength="18"
          :minlength="6"
        ></a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="passwordB" class="register-form-item">
        <a-input-password
          v-model="mobileForm.passwordB"
          :show-password="true"
          autocomplete="new-password"
          placeholder="请再次确认密码"
          :maxlength="18"
          :minlength="6"
        ></a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="code" class="register-form-item">
        <a-input
          v-model="mobileForm.code"
          placeholder="短信验证码"
          :maxlength="10"
          style="width: 280px;"
        ></a-input>
        <count-down url="REGISTER" :width="120" :onTap="sendCode"></count-down>
      </a-form-model-item>
      <a-form-model-item class="register-form-item" prop="inviteCode">
        <a-input
          v-model="mobileForm.inviteCode"
          placeholder="邀请码（可以从客服或者已注册用户处获取）"
        ></a-input>
      </a-form-model-item>
      <a-form-model-item prop="read" class="register-form-item">
        <div class="form-item-actions">
          <a-checkbox v-model="mobileForm.read">
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
import { isMobile, isMobileCode, isPass } from '@/utils/validate'
export default {
  name: 'RegisterMobile',
  mixins: [mixin],
  components: {
    CountDown
  },
  data() {
    const validateMobile = async (rule, value, callback) => {
      const res = await this.$Network.LoginService.validatemobile({
        account: value
      })
      if (res) {
        callback()
      } else {
        callback(new Error('手机号已注册'))
      }
    }
    const validatePasswordB = (rule, value, callback) => {
      if (this.mobileForm.passwordA !== value) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      loadingRegister: false,
      isRead: false,
      mobileForm: {
        mobile: '',
        passwordA: '',
        passwordB: '',
        code: '',
        inviteCode: '',
        read: false
      },
      mobileFormRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            required: true,
            pattern: isMobile,
            message: '请输入正确的手机号',
            trigger: ['change', 'blur']
          },
          { required: true, validator: validateMobile, trigger: 'blur' }
        ],
        passwordA: [
          { required: true, message: '请设置密码', trigger: 'blur' },
          { min: 6, max: 18, message: '请输入6-18位密码', trigger: 'blur' },
          {
            required: true,
            pattern: isPass,
            message: '密码请使用字母加数字的格式',
            trigger: 'blur'
          }
        ],
        passwordB: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '请输入6-18位密码', trigger: 'blur' },
          {
            required: true,
            pattern: isPass,
            message: '密码请使用字母加数字的格式',
            trigger: 'blur'
          },
          { required: true, validator: validatePasswordB, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            required: true,
            pattern: isMobileCode,
            message: '请输入正确的验证码',
            trigger: 'blur'
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
    this.mobileForm.mobile = type === 'mobile' ? value : ''
    parentId && (this.mobileForm.inviteCode = parentId)
  },
  methods: {
    sendCode: function () {
      return new Promise((resolve, reject) => {
        this.$refs.mobileForm.validateField('mobile', async (error) => {
          if (!error) {
            const res = await this.$Network.LoginService.sendCode(
              this.mobileForm.mobile,
              'REGISTER'
            )
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
      this.$refs.mobileForm.validate(async (valid) => {
        if (valid) {
          this.loadingRegister = true
          const params = {
            mobile: this.mobileForm.mobile,
            password: this.mobileForm.passwordB,
            mobileVcode: this.mobileForm.code,
            parentId: this.mobileForm.inviteCode
          }
          const res = await this.$Network.LoginService.register(params)
          this.loadingRegister = false
          if (res) {
            this.$message.success('注册成功')
            this.$router.push({
              path: 'login',
              query: {
                account: this.mobileForm.mobile
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
.register-mobile {
  height: 100%;
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
