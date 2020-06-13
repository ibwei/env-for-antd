<template>
  <div class="login">
    <div class="login-content">
      <a-card size="small" :style="cardStyle">
        <slot name="form"></slot>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserformLayout',
  props: {
    width: {
      type: String,
      default: '350px'
    }
  },
  data() {
    return {
      cardStyle: { padding: '0 30px' }
    }
  },
  created() {
    const temp = { width: this.width }
    this.cardStyle = { ...this.cardStyle, ...temp }
  }
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  padding: 0px;
  margin: 0;
  min-height: 100vh;
  background: url('../assets/login-bg.png') top center no-repeat;
  .login-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
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
