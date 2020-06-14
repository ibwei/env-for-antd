<template>
  <div class="two-verify-modal">
    <p class="tip">
      <span>*</span>
      提示：提币操作需进行二次验证，请选择绑定其中一种验证方式
    </p>
    <div class="flex-container">
      <!--      <a-row :gutter="20" type="flex" align="middle" class="flex-row">-->
      <!--        <a-col :span="18">-->
      <!--          <label>谷歌验证绑定</label>-->
      <!--        </a-col>-->
      <!--        <a-col :span="6">-->
      <!--          <a-button-->
      <!--            type="primary"-->
      <!--            size="small"-->
      <!--            @click="$router.push({ name: 'SecuritySetting' })"-->
      <!--            >去设置</a-button-->
      <!--          >-->
      <!--        </a-col>-->
      <!--      </a-row>-->
      <a-row :gutter="20" type="flex" align="middle" class="flex-row">
        <a-col :span="18">
          <label>短信/邮箱验证绑定</label>
        </a-col>
        <a-col :span="6">
          <a-button type="primary" size="small" @click="$router.push({ name: 'BaseSetting' })">
            去设置
          </a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoVerifyModal',
  props: {
    $router: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
.two-verify-modal-container {
  width: 500px;
  min-width: 500px;

  .tip {
    font-size: 12px;
    color: #999999;
    padding-bottom: 20px;
  }

  .flex-container {
    .flex-row {
      margin: 15px 0;
    }

    .flex-row > div:first-child {
      text-align: left;
    }

    .flex-row > div:last-child {
      text-align: right;
    }
  }
}
</style>
