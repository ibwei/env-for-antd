<template>
  <a-result :status="errorList[currentIndex].statusCode" :title="errorList[currentIndex].statusCode" :sub-title="$t(errorList[currentIndex].noticeText)">
    <template #extra>
      <a-button type="primary" @click="backHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  name: 'Error',
  data() {
    return {
      currentIndex: 0,
      errorList: [
        {
          id: 0,
          statusCode: '404',
          noticeText: 'Sorry, the page you visited does not exist.'
        },
        {
          id: 1,
          statusCode: '403',
          noticeText: 'Sorry, you are not authorized to access this page.'
        },
        {
          id: 2,
          statusCode: '500',
          noticeText: 'Sorry, the server is wrong.'
        }
      ]
    }
  },
  created() {
    const code = this.$route.query.code
    for (let i = 0; i < this.errorList.length; i++) {
      if (this.errorList[i].statusCode === code) {
        this.currentIndex = this.errorList[i].id
        break
      }
    }
  },
  methods: {
    backHome() {
      this.$router.push('/')
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Sorry, the page you visited does not exist.': '',
        'Sorry, you are not authorized to access this page.': '',
        'Sorry, the server is wrong.': ''
      }
    }
  }
}
</script>
