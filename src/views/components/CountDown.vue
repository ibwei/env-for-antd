<template>
  <div class="count-down">
    <a-button
      ref="sendMsgBtn"
      :size="size"
      :type="type"
      :loading="loading"
      :disabled="loading || disabled"
      :style="{ width: width ? width + 'px' : '' }"
      @click="onSendCode"
    >
      {{ sendBtnText }}
    </a-button>
  </div>
</template>

<script>
import { setStorage, getStorage, deleteStorage } from '@/utils/storage'
export default {
  name: 'CountDown',
  props: {
    width: {
      type: [String, Number]
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: 'primary'
    },
    url: {
      type: String,
      required: true
    },
    timeSize: {
      type: Number,
      default: 60
    },
    format: {
      type: Function
    },
    onTap: {
      type: Function
    }
  },
  data() {
    return {
      time: 0,
      timer: null,
      loading: false,
      disabled: false
    }
  },
  computed: {
    sendBtnText() {
      if (this.format) {
        return this.format(this.time)
      } else {
        return this.time > 0 ? `${this.time}s后获取` : '获取验证码'
      }
    }
  },
  mounted() {
    this.initRemainTime()
  },
  methods: {
    onSendCode() {
      this.loading = true
      this.onTap()
        .then((reuslt) => {
          reuslt && this.sendVerifyCode()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    sendVerifyCode() {
      console.log('开始倒计时')
      this.$message.success('发送成功！')
      // debugger
      const nowTime = new Date().getTime()
      setStorage(`remaintime-${this.url}`, nowTime + this.timeSize * 1000)
      this.initRemainTime()
    },
    initRemainTime() {
      const nowTime = new Date().getTime()
      const remainTime = getStorage(`remaintime-${this.url}`)
      if (!remainTime) return
      const time = parseInt((remainTime - nowTime) / 1000)
      if (time < 1) return
      this.disabled = true
      this.time = time
      this.startTime()
    },
    startTime() {
      this.timer = setInterval(this.triggerTime.bind(this), 1000)
    },
    triggerTime() {
      this.time--
      if (this.time > 0) return
      deleteStorage(`remaintime-${this.url}`)
      clearInterval(this.timer)
      this.timer = null
      this.disabled = false
    }
  }
}
</script>

<style lang="less" scoped>
.count-down {
  display: inline-block;
}
</style>
