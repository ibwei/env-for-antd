import Vue from 'vue'

/**
 * 关于法币订单状态
 * 0-等待商家接单（用户）
 * 1-待接单（商家）
 * 2-待付款（用户/商家）
 * 3-等待用户付款（商家）
 * 4-等待商家付款（用户）
 * 5-待确认（用户/商家）
 * 6-等待商家确认（用户）
 * 7-等待用户确认（商家）
 * 8-已成交（用户/商家）
 * 9-已取消（用户/商家）
 *
 * 订单方向 0-出售，1-购买
 * 申诉状态 0-没有申诉；1-有申诉
 */

/**
 * 关于借入-借出
 * borrow-借入
 * lend-借出
 * 两者都是以广告（法币）作为主体
 * 即广告是为了借入（borrow）USDT或者借出（lend）USDT
 * */

class OtcService extends Vue {
  /**
   * 获取法币账户资产
   *
   * @param {*} params
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @returns
   * @memberof OtcService
   */
  findOtcAssetList(params) {
    return this.$post('findOtcAssetList', params)
  }

  /**
   * 获取法币账户资产折合
   *
   * @returns
   * @memberof OtcService
   */
  findOtcAssetConvert() {
    return this.$post('findOtcAssetConvert')
  }

  /**
   * 获取可用抵押币列表
   *
   * @returns
   * @memberof OtcService
   */
  queryTradePawnList() {
    return this.$get('tradePawnList')
  }

  /**
   * 获取抵押币实时币价
   *
   * @returns
   * @param {*} coinEunit 币种名
   */
  queryCollateralPrice(coinEunit) {
    return this.$get('collateralPrice', {
      params: {
        coinEunit
      }
    })
  }

  /**
   * 获取法币币种信息
   *
   * @returns
   */
  queryLegalCoin() {
    return this.$get('legalCoin')
  }

  /**
   * 获取用户可用支付方式
   *
   * @returns
   * @memberof OtcService
   */
  findUserPayments() {
    return this.$post('findUserPayments')
  }

  /**
   * 广告列表
   *
   * @param {*} params
   * @param {*} params.type 0-出售 1-购买 2-全部
   * @param {*} params.pawnCoinId 币种id
   * @param {*} params.sort 0-数量升序、1-数量降序、2-价格升序、3-价格降序
   * @param {*} params.dailyRateSort 0-日利率升序、1-日利率降序
   * @param {*} params.incomeSort 0-收益升序、1-收益降序
   * @param {*} params.pawnRateSort 0-抵押率升序 1-抵押率降序
   * @param {*} params.status 0-上架、1-下架、2-暂停
   * @param {*} params.cycle 周期
   * @param {*} params.pageSize 每页条数
   * @param {*} params.pageNumber 当前页码
   */
  findTradeList(params) {
    return this.$post('findTradeList', params)
  }

  /**
   * 借出USDT
   *
   * @param {*} params
   * @param {*} params.tallaId 订单ID
   * @param {*} params.legalQuantity 金额
  //  * @param {*} params.pawnCoinId 抵押币ID
  //  * @param {*} params.pawnRate 抵押率
  //  * @param {*} params.pawnQuantity 预计抵押价值
   * @param {*} params.tradePassword 资金安全码
   */
  borrow(params) {
    return this.$post('borrow', params)
  }

  /**
   * 借入USDT
   *
   * @param {*} params
   * @param {*} params.tallaId 订单ID
   * @param {*} params.legalQuantity 金额
   * @param {*} params.pawnCoinId 抵押币ID
   * @param {*} params.pawnRate 抵押率
   * @param {*} params.pawnQuantity 预计抵押价值
   * @param {*} params.tradePassword 资金安全码
   */
  lend(params) {
    return this.$post('lend', params)
  }

  /**
   * 发布借入USDT的广告
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 抵押币ID
   * @param {*} params.legalCoinId 法币币种ID
   * @param {*} params.legalQuantity 金额
   * @param {*} params.cycle 周期
   * @param {*} params.pawnRate 抵押率
   * @param {*} params.legalDailyRate 日利率
   * @param {*} params.totalInterest 总利息
   * @param {*} params.lowPrice 最低金额
   * @param {*} params.tradePassword 资金安全码
   */
  publishBorrow(params) {
    return this.$post('publishBorrow', params)
  }

  /**
   * 发布借入USDT的广告
   *
   * @param {*} params.legalQuantity 金额
   * @param {*} params.cycle 周期
   * @param {*} params.legalDailyRate 日利率
   * @param {*} params.totalInterest 总利息
   * @param {*} params.lowPrice 最低金额
   * @param {*} params.highPrice 最高金额
   * @param {*} params.nature 是否大宗交易
   * @param {*} params.tradePassword 资金安全码
   */
  publishLend(params) {
    return this.$post('publishLend', params)
  }

  /**
   * 我的订单
   *
   * @param {*} params
   * @param {*} params.type 0-未完成订单、1-全部订单、2-购买订单、3-出售订单、4-待接单
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   */
  findMyOrderList(params) {
    return this.$post('findMyOrderList', params)
  }

  /**
   * 我的订单-取消借入-商家接单前
   *
   * @param {*} orderNo
   * @returns
   * @memberof OtcService
   */
  beforeCancelLend(orderNo) {
    return this.$post('beforeCancelLend', orderNo)
  }

  /**
   * 我的订单-取消借出-商家接单前
   *
   * @param {*} orderNo
   * @returns
   * @memberof OtcService
   */
  beforeCancelBorrow(orderNo) {
    return this.$post('beforeCancelBorrow', orderNo)
  }

  /**
   * 商家订单
   *
   * @param {*} params
   * @param {*} params.type 0-未完成订单、1-全部订单、2-购买订单、3-出售订单、4-待接单
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   */
  findMerchantOrderList(params) {
    return this.$post('findMerchantOrderList', params)
  }

  /**
   * 商家订单-借出-确认接单
   *
   * @param {*} orderNo 订单ID
   * @returns
   * @memberof OtcService
   */
  lendAccept(orderNo) {
    return this.$post('lendAccept', orderNo)
  }

  /**
   * 商家订单-借入-确认接单
   *
   * @param {*} orderNo 订单ID
   * @returns
   * @memberof OtcService
   */
  borrowAccept(orderNo) {
    return this.$post('borrowAccept', orderNo)
  }

  /**
   * 商家订单-借出-拒绝接单
   *
   * @param {*} orderNo 订单ID
   * @returns
   * @memberof OtcService
   */
  lendRefuse(orderNo) {
    return this.$post('lendRefuse', orderNo)
  }

  /**
   * 商家订单-借入-拒绝接单
   *
   * @param {*} orderNo 订单ID
   * @returns
   * @memberof OtcService
   */
  borrowRefuse(orderNo) {
    return this.$post('borrowRefuse', orderNo)
  }

  /**
   * 借入广告-订单详情
   *
   * @param {*} orderNo
   * @returns
   * @memberof OtcService
   */
  borrowView(orderNo) {
    return this.$post('borrowView', orderNo)
  }

  /**
   * 借出广告-订单详情
   *
   * @param {*} orderNo
   * @returns
   * @memberof OtcService
   */
  lendView(orderNo) {
    return this.$post('lendView', orderNo)
  }

  /**
   * 订单支付界面-借出广告-付款
   *
   * @param {*} orderNo 订单号
   * @returns
   * @memberof OtcService
   */
  lendPayView(orderNo) {
    return this.$post('lendPayView', orderNo)
  }

  /**
   * 订单支付界面-借入广告-付款
   *
   * @param {*} orderNo 订单号
   * @returns
   * @memberof OtcService
   */
  borrowPayView(orderNo) {
    return this.$post('borrowPayView', orderNo)
  }

  /**
   * 借出-确认转账
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   */
  lendPay(params) {
    return this.$post('lendPay', params)
  }

  /**
   * 借入-确认转账
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   */
  borrowPay(params) {
    return this.$post('borrowPay', params)
  }

  /**
   * 借入 - 接单后取消
   *
   * @param {*} orderNo
   */
  afterCancelBorrow(orderNo) {
    return this.$post('afterCancelBorrow', orderNo)
  }

  /**
   * 借出 - 接单后取消
   *
   * @param {*} orderNo
   */
  afterCancelLend(orderNo) {
    return this.$post('afterCancelLend', orderNo)
  }

  /**
   * 借入- 确认收款
   *
   * @param {*} orderNo 单号
   */
  borrowReceipt(orderNo) {
    return this.$post('borrowReceipt', orderNo)
  }

  /**
   * 借出- 确认收款
   *
   * @param {*} orderNo 单号
   */
  lendReceipt(orderNo) {
    return this.$post('lendReceipt', orderNo)
  }

  /**
   * 借出-申诉
   *
   * @param {*} formData
   * @param {*} formData.type 申诉类型
   * @param {*} formData.orderNo 订单号
   * @param {*} formData.contact 联系人
   * @param {*} formData.description 描述
   * @param {*} formData.files 图片
   * @returns
   * @memberof OtcService
   */
  lendAppeal(formData) {
    return this.$post('lendAppeal', formData)
  }

  /**
   * 借入-申诉
   *
   * @param {*} formData
   * @param {*} formData.type 申诉类型
   * @param {*} formData.orderNo 订单号
   * @param {*} formData.contact 联系人
   * @param {*} formData.description 描述
   * @param {*} formData.files 图片
   * @returns
   * @memberof OtcService
   */
  borrowAppeal(formData) {
    return this.$post('borrowAppeal', formData)
  }

  /**
   * 我的广告
   *
   * @param {*} params
   * @param {*} params.type 0-出售 1-购买 2-全部
   * @param {*} params.status 0-上架 1-下架 2-暂停
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @returns {*} payment 1-银行卡 2-微信 3-支付宝
   * @memberof OtcService
   */
  findMerchantAdvertList(params) {
    return this.$post('findMerchantAdvertList', params)
  }

  /**
   * 我的广告 - 批量暂停
   *
   * @returns
   * @memberof OtcService
   */
  batchPause() {
    return this.$post('batchPause')
  }

  /**
   * 我的广告 - 批量上架
   *
   * @returns
   * @memberof OtcService
   */
  batchUpper() {
    return this.$post('batchUpper')
  }

  /**
   * 我的广告 - 单个下架
   *
   * @param {*} id 广告id
   * @returns
   * @memberof OtcService
   */
  singleLower(id) {
    return this.$post('singleLower', id)
  }

  /**
   * 我的广告 - 单个上架
   *
   * @param {*} tallaId 广告id
   * @returns
   * @memberof OtcService
   */
  singleUpper(tallaId) {
    return this.$post('singleUpper', tallaId)
  }

  /**
   * 我的广告 - 单个暂停
   *
   * @param {*} tallaId 广告id
   * @returns
   * @memberof OtcService
   */
  singlePause(tallaId) {
    return this.$post('singlePause', tallaId)
  }

  /**
   * 申述详情
   *
   * @param {*} orderNo 订单号
   * @returns
   * @memberof OtcService
   */
  appealView(orderNo) {
    return this.$post('appealView', orderNo)
  }
}

export default new OtcService()
