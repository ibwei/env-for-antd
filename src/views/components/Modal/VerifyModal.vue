<template>
  <div class="verify-modal" ref="VerifyModal">
    <a-form :model="formData" :rules="formRules" ref="VerifyModalForm" laba-width="80px">
      <!-- 手机号 -->
      <a-form-item label="手机号" prop="mobile" v-if="mode == 'mobile'">
        <a-input
          v-model.number="formData.mobile"
          :maxlength="11"
          :minlength="11"
          :disabled="mobileDisabled"
        ></a-input>
      </a-form-item>
      <!-- 邮箱地址 -->
      <a-form-item label="邮箱地址" prop="email" v-if="mode == 'email'">
        <a-input v-model="formData.email" :disabled="emailDisabled"></a-input>
      </a-form-item>
      <!-- 验证码 -->
      <a-form-item label="验证码" prop="code">
        <div class="inner">
          <a-input v-model.number="formData.code" :maxlength="6" :minlength="6"></a-input>
          <count-down
            class="count-down"
            ref="CountDown"
            width="120"
            :url="targetUrl"
            :onTap="sendCode"
          ></count-down>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { isMobile, isMobileCode } from '@/utils/validate'
import CountDown from '@/views/components/CountDown'
export default {
  name: 'VerifyModal',
  props: {
    mode: {
      type: String,
      required: true
    },
    number: {
      type: [String, Number]
    },
    targetUrl: {
      type: String,
      required: true
    }
  },
  components: { CountDown },
  data() {
    return {
      time: 0,
      formData: {
        mobile: '',
        email: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: isMobile, message: '手机号格式不正确', trigger: 'blur' }
        ],
        email: [{ required: true, message: '邮箱地址不能为空', trigger: 'blur' }],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          {
            pattern: isMobileCode,
            message: '验证码格式不正确',
            trigger: 'blur'
          }
        ]
      },
      emailDisabled: false,
      mobileDisabled: false
    }
  },
  created() {
    const modes = ['mobile', 'email']

    if (modes.indexOf(this.mode) === -1) {
      return console.log('类型不对。')
    }

    if (this.number) {
      if (this.mode === 'mobile') {
        this.formData.mobile = this.number
        this.mobileDisabled = true
      }
      if (this.mode === 'email') {
        this.formData.email = this.number
        this.emailDisabled = true
      }
    }
  },
  mounted() {
    this.$ownComponentName = 'VerifyModal'
  },
  methods: {
    sendCode() {
      let mobile
      if (this.mode === 'mobile') mobile = this.formData.mobile
      if (this.mode === 'email') mobile = this.formData.email
      console.log('mobile', mobile)
      console.log('发送验证码的接口地址为', this.targetUrl)
      return this.$Network.LoginService.sendCode(mobile, this.targetUrl)
    }
  }
}
</script>

<style lang="less" scoped>
.verify-modal {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  .inner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .count-down {
      margin-left: 5px;
    }
  }
}
</style>
