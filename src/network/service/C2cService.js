import Vue from 'vue'

class C2cService extends Vue {
  /**
   * 我的订单
   *
   * @param {*} params
   * @param {*} params.type 0-借出 1-借入
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.status
   * @param {*} params.orderNo
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @param {*} params.pawnRateSort 质押率排序 0-升 1-降
   * @param {*} params.quantitySort 借入金额排序 0-升 1-降
   * @memberof C2cService
   */
  getC2cOrderList(params) {
    return this.$post('c2cOrderList', params)
  }

  /**
   * 我的广告
   *
   * @param {*} params
   * @param {*} params.type 0-借出 1-借入
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @param {*} params.pawnRateSort 质押率排序 0-升 1-降
   * @param {*} params.sort 数量排序 0-升 1-降
   * @memberof C2cService
   */
  getC2cAdvertList(params) {
    return this.$post('c2cAdvertList', params)
  }

  /**
   * 广告撤销
   *
   * @tallaId
   * @memberof C2cService
   */
  c2cRevokeAdvert(tallaId) {
    return this.$post('revokeAdvert', tallaId)
  }
  /**
   * 借贷管理-订单详情
   *
   * @orderId
   * @memberof C2cService
   */
  getLoanOrderDetail(orderId) {
    return this.$post('loanOrderDetail', orderId)
  }

  /**
   * 补仓记录
   *
   * @param {*} params
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @memberof C2cService
   */
  getCallMarginRecord(params) {
    return this.$post('callMarginRecord', params)
  }

  /**
   * 订单过程中-合约信息
   *
   * @orderId
   * @memberof C2cService
   */
  getOrderProcess(orderId) {
    return this.$post('orderProcess', orderId)
  }

  /**
   * 订单撤销
   *
   * @orderId
   * @memberof C2cService
   */
  c2cRevokeOrder(orderId) {
    return this.$post('revokeC2cOrder', orderId)
  }
  /**
   * 订单-还款地址列表
   *
   * @tallaNo  广告号
   * @memberof C2cService
   */
  queryPepaymentAddress(tallaNo) {
    return this.$post('repaymentAddress', tallaNo)
  }
  /**
   * 订单-获取多签签名源数据
   *
   * @orderNo  订单号
   * @memberof C2cService
   */
  getMultiSignRawData(orderNo) {
    return this.$post('multiSignRawData', orderNo)
  }

  /**
   * 订单-上报用户USDT相关的签名数据
   *
   * @param {*} params
   * @param {*} params.orderNo 订单号
   * @param {*} params.tallaNo 广告号
   * @param {*} params.rawData 签名数据
   * @param {*} params.rawTransactionType 0：批量转账前的 approve (授权)，1：usdt 批量转账
   * @memberof C2cService
   */
  reportRawData(params) {
    return this.$post('reportRawData', params)
  }
  /**
   * 订单-提币-已平仓未收取手续费-补充手续费
   *
   * @orderId  订单ID
   * @memberof C2cService
   */
  outFeeWithdraw(orderId) {
    return this.$post('outFeeWithdraw', orderId)
  }

  /**
   * 订单-补仓-查询需补仓的数量
   *
   * @orderId  订单ID
   * @memberof C2cService
   */
  queryCallMarginQuantity(orderId) {
    return this.$post('callMarginQuantity', orderId)
  }

  /**
   * 订单-查询抵押人待确认订单
   *
   * @memberof C2cService
   */
  queryMortgagorUnconfirmedOrder() {
    return this.$post('mortgagorUnconfirmedOrder')
  }

  /**
   * 订单-抵押人确认已还款订单
   * @orderId  订单ID
   * @memberof C2cService
   */
  confirmOrder(orderId) {
    return this.$post('confirmOrder', orderId)
  }

  /**
   * 订单-上报用户BTC多签签名数据
   *
   * @param {*} params
   * @param {*} params.orderNo 订单号
   * @param {*} params.signatureData 签名数据
   * @memberof C2cService
   */
  reportBtcMultiSignData(params) {
    return this.$post('reportBtcMultiSignData', params)
  }
  /**
   * @description: 获取签名数据
   * 替换掉 btc1.trezor.io/api/v2/tx/接口 解决跨域问题
   * @param {String} hash
   * @return: data
   * @author: zdy
   */
  fromHashToSign(params) {
    return this.$post('fromHashToSign', params)
  }
}

export default new C2cService()
