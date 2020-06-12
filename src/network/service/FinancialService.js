import Vue from 'vue'

class FinancialService extends Vue {
  /**
   * 获取用户资产总和
   *
   */
  getAllAssets() {
    return this.$post('allAssets')
  }

  /**
   * 获取用户资产
   *
   * @params {*} params
   * @params {*} params.userId
   */
  userAllAsset(params) {
    return this.$post('userAll', params)
  }

  /**
   * 获取用户积分
   *
   * @param {*} params
   */
  findUserIntegral(params) {
    return this.$post('findUserIntegral', params)
  }

  /**
   * 获取单个用户充提记录
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.transactionType
   * @param {*} params.coinCode
   * @param {*} params.pageNumber
   * @param {*} params.pageSize
   * @param {*} params.startTime
   * @param {*} params.endTime
   */
  userTransactionList(params) {
    return this.$post('userTransactionList', params)
  }

  /**
   * 获取单个用户CNT充提记录
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.memberId
   * @param {*} params.streamType
   * @param {*} params.pageNumber
   * @param {*} params.pageSize
   * @param {*} params.startTime
   * @param {*} params.endTime
   */
  userCntTransactionList(params) {
    return this.$post('queryCntTransactionList', params)
  }

  /**
   * 撤销提币
   *
   * @param {*} params
   * @param {*} params.id
   */
  cancelTransaction(params) {
    return this.$post('cancelTransaction', params)
  }

  /**
   * 撤销CNT提现
   *
   * @param {*} params
   * @param {*} params.id
   */
  cancelCntTransaction(params) {
    return this.$post('cancelCntTransaction', params)
  }

  /**
   * 流水记录
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.coinCode
   * @param {*} params.streamType
   * @param {*} params.pageNumber
   * @param {*} params.pageSize
   * @param {*} params.startTime
   * @param {*} params.endTime
   */
  hotRecord(params) {
    return this.$post('hotRecord', params, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  /**
   * 导出流水记录
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.coinCode
   * @param {*} params.streamType
   * @param {*} params.startTime
   * @param {*} params.endTime
   */
  exportRecord(params) {
    return this.$post('getExport', params)
  }

  /**
   * 查询用户委托所有交易区
   *
   * @param {*} params
   * @param {*} params.entrustUserId
   * @param {*} params.selectEntrustType
   */
  selectEntrustAreaCurrencyEunit(params) {
    return this.$post('selectEntrustAreaCurrencyEunit', params)
  }

  /**
   * 财务中心查询用户委托
   *
   * @param {*} params
   * @param {*} params.entrustUserId
   * @param {*} params.selectEntrustType
   * @param {*} params.tradeAreaCurrencyEunit
   * @param {*} params.tradePairCurrencyEunit
   * @param {*} params.pageNumber
   * @param {*} params.pageSize
   */
  selectEntrustByFinance(params) {
    return this.$post('selectEntrustByFinance', params)
  }

  /**
   * 查询一条委托下的所有订单详情(历史委托查看详情)
   *
   * @param {FormData} params
   * @param {*} params.ciphertext
   */
  entrustList(params) {
    return this.$post('entrustList', params)
  }

  /**
   * 查询用户的所有订单明细(成交记录)
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.tradeArea
   * @param {*} params.tradePair
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryAllDetail(params) {
    return this.$post('queryAllDetail', params)
  }

  /**
   * 获取充币钱包地址
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.coinCode
   * @param {*} params.chain
   * @returns
   * @memberof FinancialService
   */
  getAdress(params) {
    return this.$post('getAdress', params)
  }

  /**
   * 改变委托状态
   *
   * @param {*} params
   * @param {*} params.status
   * @param {*} params.entrustId
   * @param {*} params.currentUserId
   * @returns
   * @memberof FinancialService
   */
  updateEntrust(params) {
    return this.$post('revokeEntrust', params)
  }

  /**
   * 查询资产质押-利率交易市场列表
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryPawnList(params) {
    return this.$post('pawnList', params)
  }

  /**
   * 查询-资产质押-利率交易市场-还款金额
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  queryRepaymentMoney(orderNo) {
    return this.$post('repaymentMoney', orderNo)
  }

  /**
   * 资产质押-利率交易市场-还款
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  legalRepayment(orderNo) {
    return this.$post('legalRepayment', orderNo)
  }

  /**
   * 资产质押-利率交易市场-补仓
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @param {*} params.pawnQuantity 补仓数量
   * @returns
   * @memberof FinancialService
   */
  pawnCover(params) {
    return this.$post('pawnCover', params)
  }

  /**
   * 查询投资收益-利率交易市场列表
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryInvestmentList(params) {
    return this.$post('investmentList', params)
  }

  /**
   * 投资收益-利率交易市场-平仓
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  investmentClearance(params) {
    return this.$post('investmentClearance', params)
  }

  /**
   * 查询资产质押-c2c市场列表
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryC2cPawnList(params) {
    return this.$post('c2cPawnList', params)
  }

  /**
   * 查询-资产质押-c2c市场-还款金额
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  queryC2cRepaymentMoney(orderNo) {
    return this.$post('c2cRepaymentMoney', orderNo)
  }

  /**
   * 资产质押-c2c市场-还款
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  c2cLegalRepayment(orderNo) {
    return this.$post('c2cLegalRepayment', orderNo)
  }

  /**
   * 资产质押-c2c市场-补仓
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @param {*} params.pawnQuantity 补仓数量
   * @returns
   * @memberof FinancialService
   */
  c2cPawnCover(params) {
    return this.$post('c2cPawnCover', params)
  }

  /**
   * 查询投资收益-c2c市场列表
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryC2CInvestmentList(params) {
    return this.$post('c2cInvestmentList', params)
  }

  /**
   * 投资收益-c2c市场-平仓
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @returns
   * @memberof FinancialService
   */
  c2cInvestmentClearance(params) {
    return this.$post('c2cInvestmentClearance', params)
  }

  /**
   * 委托管理-查询列表
   *
   * @param {*} params
   * @param {*} params.type 0：当前委托，1：历史委托
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @returns
   * @memberof FinancialService
   */
  queryCtcEntrustList(params) {
    return this.$post('ctcEntrustList', params)
  }

  /**
   * 查询成交记录-c2c市场
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.type
   * @param {*} params.status
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryC2CDealList(params) {
    return this.$post('c2cDealList', params)
  }

  /**
   * 查询成交记录-ctc市场
   *
   * @param {*} params
   * @param {*} params.pawnCoinId 质押币ID
   * @param {*} params.type
   * @param {*} params.status
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   * @param {*} params.startTime
   * @param {*} params.endTime
   * @returns
   * @memberof FinancialService
   */
  queryCTCDealList(params) {
    return this.$post('ctcDealList', params)
  }

  /**
   * 查询某币种下-广告/订单列表
   *
   * @param {*} params
   * @param {*} params.coinEunit 币种国际码
   * @returns
   * @memberof FinancialService
   */
  queryOrderAdvertList(params) {
    return this.$post('orderAdvertList', params)
  }

  /**
   * 多签钱包/智能合约提币
   *
   * @param {*} params
   * @param {*} params.coinEunit 币种国际码
   * @param {*} params.tallaId 广告ID
   * @param {*} params.orderId 订单ID
   * @param {*} params.address 提币地址（ETH、usdt不传，BTC传）
   * @returns
   * @memberof FinancialService
   */
  walletWithdraw(params) {
    return this.$post('walletWithdraw', params)
  }

  /**
   * 多签钱包-申请签名审批
   *
   * @param {*} params
   * @param {*} params.orderNo 单号
   * @param {*} params.description 申请理由
   * @returns
   * @memberof FinancialService
   */
  addSignature(params) {
    return this.$post('addSignature', params)
  }
}

export default new FinancialService()
