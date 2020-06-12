import Vue from 'vue'

class MscurrencyService extends Vue {
  getCoinInfos(data) {
    return this.$post('getCoinInfos', data)
  }

  getCoinInfo(data) {
    return this.$post('getCoinInfoById', data)
  }

  getOctopusArticles(data) {
    return this.$post('getOctopusArticles', data)
  }

  getOctopusArticleTail(data) {
    return this.$post('getOctopusArticleTail', data)
  }
}

export default new MscurrencyService()
