import Vue from 'vue'

class ContentService extends Vue {
  getOctopusArticleTail(data) {
    return this.$post('getOctopusArticleTail', data)
  }
}

export default new ContentService()
