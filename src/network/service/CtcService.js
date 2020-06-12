import Vue from 'vue'

class CtcService extends Vue {
  getAssetList(data) {
    return this.$post('queryAllAssets', data)
  }

  // 获取对应的充币地址
  getAddress(data) {
    return this.$post('getAdress', data)
  }

  // 获取对应币 提币地址
  getCoinWithdrawAddress(data) {
    return this.$post('outAddress', data)
  }

  // 添加钱包地址
  addAddress(data) {
    return this.$post('addressAdd', data)
  }

  // 删除钱包地址
  deleteAddress(id) {
    return this.$post('addressDelete', { id: id })
  }

  /**
   * 查询单币种账户余额
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.coinId
   * @returns
   * @memberof OtcService
   */
  getBalance(params) {
    return this.$post('queryBalance', params)
  }

  // 提币操作
  widthDraw(data) {
    return this.$post('drawing', data)
  }

  // 充值cnt
  recharge(data) {
    return this.$post('queryCntRechargeInfo', data)
  }

  // 体现cnt
  widthDrawCnt(data) {
    return this.$post('withdrawCnt', data)
  }

  queryBankList(data) {
    return this.$post('queryUserBankList', data)
  }

  queryLockAsset(data) {
    return this.$post('queryLockAsset', data)
  }

  searchBankName(data) {
    return this.$post('searchBankName', data)
  }

  addBank(data) {
    return this.$post('addBank', data)
  }
}

export default new CtcService()
