import Vue from 'vue'

class MarketService extends Vue {
  /**
   * 查询法定货币信息
   */
  queryCtcLegalCoin() {
    return this.$get('ctcLegalCoin')
  }

  /**
   * 获取币种列表
   */
  getCoinList() {
    return this.$get('coinList')
  }

  // 获取交易区列表
  queryAreaList() {
    return this.$post('queryAreaList')
  }

  /**
   * 发布
   *
   * @param {*} params
   * @param {*} params.type 1:借入0:借出
   * @param {*} params.pawnCoinId 抵押币ID
   * @param {*} params.legalQuantity 金额
   * @param {*} params.cycle 周期
   * @param {*} params.pawnRate 抵押率
   * @param {*} params.legalDailyRate 日利率
   * @param {*} params.totalInterest 总利息
   * @param {*} params.tradePassword 资金安全码
   */
  publish(params) {
    return this.$post('publish', params)
  }

  /**
   * 借入
   *
   * @param {*} params
   * @param {*} params.type 1:借入
   * @param {*} params.pawnCoinId 抵押币ID
   * @param {*} params.legalQuantity 金额
   * @param {*} params.cycle 周期
   * @param {*} params.pawnRate 抵押率
   * @param {*} params.legalDailyRate 日利率
   * @param {*} params.totalInterest 总利息
   * @param {*} params.security 资金安全码（非必填）
   */
  ctcBorrow(params) {
    return this.$post('ctcBorrow', params)
  }

  /**
   * 借出
   *
   * @param {*} params
   * @param {*} params.type 0:借出
   * @param {*} params.pawnCoinId 抵押币ID
   * @param {*} params.legalQuantity 金额
   * @param {*} params.cycle 周期
   * @param {*} params.pawnRate 抵押率
   * @param {*} params.legalDailyRate 日利率
   * @param {*} params.totalInterest 总利息
   * @param {*} params.security 资金安全码（非必填）
   */
  ctcLend(params) {
    return this.$post('ctcLend', params)
  }

  // 查询交易对信息
  queryTradePairInfo(tradePair) {
    return this.$post('queryTradePairInfo', { tradePairEunit: tradePair })
  }

  /**
   * 查询交易对余额
   * @param {*} userId 用户ID
   * @param {*} tradePair 交易对国际码组合（CNT_BT）
   */
  queryTradePairBalance(userId, tradePair) {
    const tradePairArray = tradePair.split('_')
    return this.$post('queryTradePairBalance', {
      userId,
      tradeQueue: `${tradePairArray[0]}-${tradePairArray[1]}`
    })
  }

  /**
   * 检测创建委托是否需要资金安全码
   */
  checkSecurity() {
    return this.$post('checkSecurity', {})
  }

  createEntrust(params) {
    /**
     * 创建委托
     */
    return this.$post('createEntrust', params)
  }

  revokeEntrust(params) {
    /**
     * 撤销委托
     */
    return this.$post('revokeEntrust', params)
  }

  monopoly(params) {
    return this.$post('monopoly', params)
  }

  bondAsset(id) {
    return this.$post('bondAsset', id)
  }

  repayment(orderNo) {
    return this.$post('repayment', orderNo)
  }

  closing(id) {
    return this.$post('closing', id)
  }

  findOrder(id) {
    return this.$post('findOrder', id)
  }

  batchBondEntrust(params) {
    return this.$post('batchBondEntrust', params)
  }

  batchRepay(params) {
    return this.$post('batchRepay', params)
  }

  messageRead(params) {
    return this.$post('messageRead', params)
  }
  // cipher: false
}

export default new MarketService()
