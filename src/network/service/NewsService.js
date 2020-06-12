import Vue from 'vue'

class NewsService extends Vue {
  /**
   * 获取指定文档类型下的所有文档基础信息
   *
   * @param {*} params
   * @param {*} params.typeId
   * @param {*} params.platform
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @returns
   * @memberof NewsService
   */
  getOctopusArticles(params) {
    return this.$post('getOctopusArticles', params)
  }

  /**
   * 获取帮助中心和公告的详情(获取指定文档类型详细信息)
   *
   * @param {*} params
   * @param {*} params.id
   * @returns
   * @memberof NewsService
   */
  getOctopusArticleTail(params) {
    return this.$post('getOctopusArticleTail', params)
  }

  /**
   * 帮助中心(获取所有（指定）文档类型,包含每种类型下最多4个小标题)
   * @param {*} params
   * @param {*} params.platform
   */
  getOctopusArticleVOs(params) {
    return this.$post('getOctopusArticleVOs', params)
  }
}

export default new NewsService()
