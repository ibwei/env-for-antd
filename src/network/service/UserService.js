import Vue from 'vue'

class UserService extends Vue {
  /**
   * 精准查询用户信息
   *
   * @param {*} params
   * @param {*} params.userId
   */
  findCenterUserMain(params) {
    return this.$post('findCenterUserMain', params)
  }

  /**
   * 用户登录日志
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.pageSize
   * @param {*} params.pageNumber
   */
  loginLog(params) {
    return this.$post('loginLog', params)
  }

  /**
   * 设置安全策略
   *
   * @param {*} params
   * @param {*} params.uuid
   * @param {*} params.feeDeductionType
   * @param {*} params.changePasswordType
   * @param {*} params.tradePasswordType
   */
  updateStrategy(params) {
    return this.$post('updateStrategy', params)
  }

  /**
   * 设置修改 资金安全码
   *
   * @param {*} params
   * @param {*} params.uuid
   * @param {*} params.tradePassword
   */
  updateUserTrade(params) {
    return this.$post('updateUserTrade', params)
  }

  /**
   * 获取Google安全绑定路径
   *
   * @param {*} params
   * @param {*} params.userId
   */
  getGoogleSafe(params) {
    return this.$post('getGoogleSafe', params)
  }

  /**
   * 开启/关闭 Google验证
   *
   * @param {*} params
   * @param {*} params.userId
   * @param {*} params.googleCode
   * @param {*} params.status 0 关 1 开
   * @param {*} params.mobileVcode 开启需要这个字段
   * @param {*} params.verifyType 开启需要这个字段
   */
  switchGoogleSafe(params) {
    return this.$post('switchGoogleSafe', params)
  }

  /**
   * 查询用户Google验证器安全信息
   *
   * @param {*} params
   * @param {*} params.userId
   */
  showGoogleSafe(params) {
    return this.$post('showGoogleSafe', params)
  }

  /**
   * 修改登录密码
   *
   * @param {*} params
   * @param {*} params.uuid
   * @param {*} params.password
   */
  updatePassword(params) {
    return this.$post('updatePassword', params)
  }

  /**
   * 普通实名认证
   *
   * @param {*} params
   * @param {*} params.uuid
   * @param {*} params.idcard
   */
  certification(params) {
    return this.$post('certification', params)
  }

  /**
   * 获取高级认证token
   *
   * @param {*} params
   * @param {*} params.uuid
   */
  getFaceIdToken(params) {
    return this.$post('getFaceIdToken', params)
  }

  /**
   * 查询手动认证失败原因
   *
   */
  queryManualRemark() {
    return this.$post('queryManualRemark', {})
  }

  /**
   * 上传高级实名认证图片
   *
   * @param {FormData} params
   * @param {*} params.idcardPicFront
   * @param {*} params.idcardPicBack
   * @param {*} params.idcardPicOnhand
   * @param {*} params.memberId
   */
  uploadCertificationImg(params) {
    return this.$post('uploadCertificationImg', params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  /**
   * 绑定手机/邮箱地址
   *
   * @param {*} params
   * @param {*} params.uuid 用户id
   * @param {*} params.mobile 手机/邮箱地址
   * @param {*} params.mobileVcode 验证码
   * @memberof UserService
   */
  bindAccountNumber(params) {
    return this.$post('bindAccountNumber', params)
  }

  /**
   * 校验绑定的手机/邮箱地址
   *
   * @param {*} params
   * @param {*} params.mobile 手机/邮箱地址
   * @param {*} params.uuid
   * @returns
   * @memberof UserService
   */
  validateAccountNumber(params) {
    return this.$post('validateAccountNumber', params)
  }

  /**
   * 解绑绑定的手机/邮箱地址
   *
   * @param {*} params
   * @param {*} params.uuid 用户id
   * @param {*} params.memberId 用户memberId
   * @param {*} params.mobile 手机/邮箱地址
   * @param {*} params.verifyCode 验证码
   * @param {*} params.verifyType 状态码 530
   * @returns
   * @memberof UserService
   */
  removeAccountNumber(params) {
    return this.$post('removeAccountNumber', params)
  }

  /**
   * 支付设置 - 查询所有的币种
   *
   */
  queryCoins() {
    return this.$get('coinsList')
  }

  /**
   * 支付设置 - 查询钱包地址列表
   *
   */
  queryUserPayments() {
    return this.$post('userPayments')
  }

  /**
   * 支付设置 - 查询默认钱包地址
   *
   */
  queryUserDefaultPayment() {
    return this.$post('userDefaultPayment')
  }

  /**
   * 支付设置 - 添加地址
   * @param {*} params
   * @param {*} params.name 地址别名
   * @param {*} params.walletAddress 地址
   */
  addUserPayment(params) {
    return this.$post('addUserPayment', params)
  }

  /**
   * 支付设置 - 设置默认地址
   * @param {*} params.userPaymentId
   */
  setDefaultPayment(params) {
    return this.$post('setDefaultPayment', params)
  }

  /**
   * 用户签到
   */
  signIn() {
    return this.$post('signIn', {})
  }

  /**
   * 检测用户是否已签到
   */
  checkSignInStatus() {
    return this.$post('checkSignInStatus', {})
  }

  logout(userId) {
    return this.$post('outLogin', { userId })
  }

  /**
   * 查询用户硬件钱包公钥是否已经绑定
   *
   * @memberof C2cService
   */
  checkPublicKeyIsBound() {
    return this.$post('publicKeyIsBound', {})
  }

  /**
   * 绑定硬件钱包公钥
   * @publicKey 公钥
   * @udunSerialNum U盾序列号
   * @memberof C2cService
   */
  bindPublicKey(params) {
    return this.$post('bindPublicKey', params)
  }

  /**
   * 查询用户是否授权USDT批量转账
   *
   * @memberof C2cService
   */
  checkUsdtIsApprove() {
    return this.$post('usdtIsApprove', {})
  }
}

export default new UserService()
