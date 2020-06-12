export default {
  /* 刷新token */
  updateToken: {
    gateway: '/BIFU-AUTH',
    path: '/reacquire',
    cipher: false
  },
  /* 登录 */
  login: {
    gateway: '/BIFU-USERCENTER',
    path: '/system/auth/login',
    scene: 'OTC',
    zlg: true
  },
  /* 注册基本信息审核 */
  checkRegister: {
    gateway: '/BIFU-USERCENTER',
    path: '/front/instant/checkRegister',
    scene: 'OTC',
    zlg: true
  },
  /* 注册 */
  register: {
    gateway: '/BIFU-USERCENTER',
    path: '/front/instant/register',
    scene: 'OTC',
    zlg: true
  },
  /* 获取验证码 */
  sendNote: {
    gateway: '/BIFU-USERCENTER',
    path: '/front/instant/sendNotePlus',
    scene: 'OTC',
    zlg: true
  },
  /* 获取用户可用支付方式 */
  findUserPayments: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/findByLoginUserIdAndEnable',
    scene: 'OTC'
  },
  /**
   * 贷后板块
   * */
  /* 资产质押-利率交易市场 */
  pawnList: {
    gateway: '/BIFU-AIDE',
    path: '/strict/pawn/list',
    scene: 'OTC'
  },
  /* 资产质押-利率交易市场-补仓 */
  pawnCover: {
    gateway: '/BIFU-TRADE',
    path: '/strict/barn/patch',
    scene: 'OTC'
  },
  // 一键转卖
  batchBondEntrust: {
    gateway: '/BIFU-TRADE',
    path: '/strict/bond/lend/batchBondEntrust',
    scene: 'OTC'
  },
  // 一键还款
  batchRepay: {
    gateway: '/BIFU-TRADE',
    path: '/strict/repay/batchRepay',
    scene: 'OTC'
  },
  /* 资产质押-利率交易市场-还款 */
  legalRepayment: {
    gateway: '/BIFU-TRADE',
    path: '/strict/repay/repay',
    scene: 'OTC'
  },
  /* 资产质押-利率交易市场-还款金额 */
  repaymentMoney: {
    gateway: '/BIFU-AIDE',
    path: '/strict/pawn/repayView',
    scene: 'OTC'
  },
  /* 投资收益-利率交易市场 */
  investmentList: {
    gateway: '/BIFU-AIDE',
    path: '/strict/profit/list',
    scene: 'OTC'
  },
  /* 投资收益-利率交易市场-平仓 */
  investmentClearance: {
    gateway: '/BIFU-TRADE',
    path: '/strict/barn/close',
    scene: 'OTC'
  },
  /* 资产质押-C2C市场 */
  c2cPawnList: {
    gateway: '/BIFU-OTC',
    path: '/strict/pawn/list',
    scene: 'OTC'
  },
  /* 资产质押-C2C市场-补仓 */
  c2cPawnCover: {
    gateway: '/BIFU-OTC',
    path: '/strict/barn/patch',
    scene: 'OTC'
  },
  /* 资产质押-C2C市场-还款 */
  c2cLegalRepayment: {
    gateway: '/BIFU-OTC',
    path: '/strict/repay/repay',
    scene: 'OTC'
  },
  /* 资产质押-C2C市场-还款金额 */
  c2cRepaymentMoney: {
    gateway: '/BIFU-OTC',
    path: '/strict/pawn/repayView',
    scene: 'OTC'
  },
  /* 投资收益-C2C市场 */
  c2cInvestmentList: {
    gateway: '/BIFU-OTC',
    path: '/strict/profit/list',
    scene: 'OTC'
  },
  /* 投资收益-C2C市场-平仓 */
  c2cInvestmentClearance: {
    gateway: '/BIFU-OTC',
    path: '/strict/barn/close',
    scene: 'OTC'
  },
  /* 成交记录-CTC市场 */
  ctcDealList: {
    gateway: '/BIFU-AIDE',
    path: '/strict/order/list',
    scene: 'OTC'
  },
  /* 成交记录-C2C市场 */
  c2cDealList: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/list',
    scene: 'OTC'
  },
  /* 委托管理-列表 */
  ctcEntrustList: {
    gateway: '/BIFU-AIDE',
    path: '/strict/entrust/list',
    scene: 'OTC'
  },
  /**
   * CTC板块-利率交易
   * */
  /* 法定货币信息 */
  ctcLegalCoin: {
    gateway: '/BIFU-MARKET',
    path: '/coin/legal'
  },
  /* 可用币列表 */
  coinList: {
    gateway: '/BIFU-MARKET',
    path: '/coin/tradePawnList'
  },
  /* 发布-借入借出 */
  publish: {
    gateway: '/BIFU-TRADE',
    path: '/strict/trade/order',
    scene: 'OTC'
  },
  /* 借入-成交 */
  ctcBorrow: {
    gateway: '/BIFU-TRADE',
    path: '/strict/trade/trade/borrow',
    scene: 'OTC'
  },
  /* 借出-成交 */
  ctcLend: {
    gateway: '/BIFU-TRADE',
    path: '/strict/trade/trade/lend',
    scene: 'OTC'
  },
  /* 检测发布是否需要资金安全码 */
  checkSecurity: {
    gateway: '/BIFU-TRADE',
    path: '/strict/trade/order/security',
    scene: 'OTC'
  },
  /* 撤销委托 */
  revokeEntrust: {
    gateway: '/BIFU-TRADE',
    path: '/strict/trade/cancel',
    scene: 'OTC'
  },
  monopoly: {
    gateway: '/BIFU-TRADE',
    path: '/strict/bond/lend/bondEntrust',
    scene: 'OTC'
  },
  bondAsset: {
    gateway: '/BIFU-TRADE',
    path: '/strict/bond/bondAsset',
    scene: 'OTC'
  },
  repayment: {
    gateway: '/BIFU-TRADE',
    path: '/strict/repay/repay',
    scene: 'OTC'
  },
  closing: {
    gateway: '/BIFU-TRADE',
    path: '/strict/barn/close',
    scene: 'OTC'
  },

  /**
   * OTC板块
   * */

  /**
   * 普通&大宗交易
   * */
  /* 法币币种相关信息 */
  legalCoin: {
    gateway: '/BIFU-OTC',
    path: '/coin/legal',
    cipher: false
  },
  /* 可用抵押币列表 */
  tradePawnList: {
    gateway: '/BIFU-OTC',
    path: '/coin/tradePawnList',
    scene: 'OTC'
  },
  /* 抵押币实时价格 */
  collateralPrice: {
    gateway: '/BIFU-OTC',
    path: '/coin/newPrice',
    scene: 'OTC',
    cipher: false
  },
  /* C2C-借贷市场-查询广告列表 */
  findTradeList: {
    gateway: '/BIFU-OTC',
    path: '/talla/trade/list',
    scene: 'OTC'
  },
  /* 操作借入USDT的广告--借出USDT */
  borrow: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/order',
    scene: 'OTC'
  },
  /* 操作借出USDT的广告--借入USDT */
  lend: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/order',
    scene: 'OTC'
  },
  /* 发布借入USDT的广告 */
  publishBorrow: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/talla',
    scene: 'OTC'
  },
  /* 发布借出USDT的广告 */
  publishLend: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/talla',
    scene: 'OTC'
  },
  /* 撤销广告 */
  revokeAdvert: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/revoke',
    scene: 'OTC'
  },
  /* 补仓记录 */
  callMarginRecord: {
    gateway: '/BIFU-OTC',
    path: '/strict/asset/barn/record',
    scene: 'OTC'
  },
  /* 订单过程中-合约信息 */
  orderProcess: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/orderProcess',
    scene: 'OTC'
  },
  /* 撤销订单 */
  revokeC2cOrder: {
    gateway: '/BIFU-OTC',
    path: '/strict/order/trade/revoke',
    scene: 'OTC'
  },
  /**
   * 我的&商家订单
   * */
  /* 我的订单 */
  findMyOrderList: {
    gateway: '/BIFU-OTC',
    path: '/strict/order/user/list',
    scene: 'OTC'
  },
  /* 商家订单 */
  findMerchantOrderList: {
    gateway: '/BIFU-OTC',
    path: '/strict/order/merchant/list',
    scene: 'OTC'
  },
  /* 我的订单-取消借入-商家接单前 */
  beforeCancelLend: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/beforeCancel',
    scene: 'OTC'
  },
  /* 我的订单-取消借出-商家接单前 */
  beforeCancelBorrow: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/beforeCancel',
    scene: 'OTC'
  },
  /* 商家订单-借出-确认接单 */
  lendAccept: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/accept',
    scene: 'OTC'
  },
  /* 商家订单-借出-拒绝接单 */
  lendRefuse: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/refuse',
    scene: 'OTC'
  },
  /* 商家订单-借入-确认接单 */
  borrowAccept: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/accept',
    scene: 'OTC'
  },
  /* 商家订单-借入-拒绝接单 */
  borrowRefuse: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/refuse',
    scene: 'OTC'
  },
  /* 借出-接单后取消 */
  afterCancelLend: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/afterCancel',
    scene: 'OTC'
  },
  /* 借入-接单后取消 */
  afterCancelBorrow: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/afterCancel',
    scene: 'OTC'
  },
  /* 卖单 详情 */
  lendView: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/view',
    scene: 'OTC'
  },
  /* 买单 详情 */
  borrowView: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/view',
    scene: 'OTC'
  },
  /* 订单支付界面-借出-订单信息 */
  lendPayView: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/payView',
    scene: 'OTC'
  },
  /* 订单支付界面-借入-订单信息 */
  borrowPayView: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/payView',
    scene: 'OTC'
  },
  /* 借出广告-确认转账 */
  lendPay: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/pay',
    scene: 'OTC'
  },
  /* 借入广告-确认转账 */
  borrowPay: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/pay',
    scene: 'OTC'
  },
  /* 借入-确认收款 */
  borrowReceipt: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/receipt',
    scene: 'OTC'
  },
  /* 借出-确认收款 */
  lendReceipt: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/receipt',
    scene: 'OTC'
  },
  /* 借出-申诉 */
  lendAppeal: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/lend/appeal',
    scene: 'OTC',
    cipher: false
  },
  /* 借入-申诉 */
  borrowAppeal: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/appeal',
    scene: 'OTC',
    cipher: false
  },
  /* 申述详情 */
  appealView: {
    gateway: '/BIFU-OTC',
    path: '/strict/appeal/view',
    scene: 'OTC'
  },
  /**
   * 我的广告
   * */
  /* 查询我的广告 */
  findMerchantAdvertList: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/mine/list',
    scene: 'OTC'
  },
  /* 我的广告 批量暂停 */
  batchPause: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/batch/pause',
    scene: 'OTC'
  },
  /* 我的广告 批量上架 */
  batchUpper: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/batch/hillu',
    scene: 'OTC'
  },
  /* 我的广告 单个下架 */
  singleLower: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/fengin',
    scene: 'OTC'
  },
  /* 我的广告 单个上架 */
  singleUpper: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/hillu',
    scene: 'OTC'
  },
  /* 我的广告 单个暂停 */
  singlePause: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/pause',
    scene: 'OTC'
  },
  /* 借贷管理-订单详情 */
  loanOrderDetail: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/orderDetails',
    scene: 'OTC'
  },
  /** 个人设置 */

  /* 支付设置-币种列表 */
  coinsList: {
    gateway: '/BIFU-OTC',
    path: '/coin/coinList'
  },
  /* 支付设置-钱包地址列表 */
  userPayments: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/findListByLoginUserId'
  },
  /* 支付设置-获取默认地址 */
  userDefaultPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/findByLoginUserIdDefault'
  },
  /* 支付设置-添加地址 */
  addUserPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/insertUserPayment',
    scene: 'OTC'
  },
  /* 支付设置-设置默认地址 */
  setDefaultPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/defaultUserPayment',
    scene: 'OTC'
  },
  /* 设置安全策略 */
  updateStrategy: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/updateStrategy',
    scene: 'OTC',
    zlg: true
  },
  /* 修改登录密码 */
  updatePassword: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/updateUserPass',
    scene: 'OTC',
    zlg: true
  },
  /* 设置更新资金安全码 */
  updateUserTrade: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/updateUserTrade',
    scene: 'OTC',
    zlg: true
  },
  /* 普通实名认证 */
  certification: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/ordinary',
    scene: 'OTC',
    zlg: true
  },
  /* 上传高级实名认证图片 */
  uploadCertificationImg: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/senior',
    cipher: false,
    zlg: true
  },
  /* 获取高级实名认证结果 */
  getFaceIdResult: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/getFaceIdResult'
  },
  queryManualRemark: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/querySenior',
    scene: 'OTC',
    zlg: true
  },
  /* 获取高级认证token */
  getFaceIdToken: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/getFaceIdToken'
  },
  /* 签到 */
  signIn: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/sign/daily'
  },
  /* 查询是否已签到 */
  checkSignInStatus: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/sign/findSignMsg'
  },
  /* 查询用户总返佣收益折合 */
  getCoinConvertCny: {
    gateway: '/ACTIVITY',
    path: '/strict/activity/coinNumConvertCny',
    cipher: false
  },
  /* 查询用户收益返佣列表 */
  getCoinRecord: {
    gateway: '/ACTIVITY',
    path: '/strict/activity/getRecord',
    cipher: false
  },
  /* 红包确认 */
  redBagConfirm: {
    gateway: '/ACTIVITY',
    path: '/strict/activity/feedbackSuprise'
  },
  /* 周年活动-昨日交易数据 */
  queryYesterdayData: {
    gateway: '/ACTIVITY',
    path: '/activity/showAnniversaryLastdayData'
  },
  /* 周年活动-今日交易数据 */
  queryTodayData: {
    gateway: '/ACTIVITY',
    path: '/activity/showAnniversaryTodayData'
  },
  /* 获取指定超级伙伴邀请的所有伙伴信息 (不加密) */
  getSuperiorsBySuperId: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/api/showSuperiorsBySuperId',
    cipher: false
  },
  /* 获取Google安全绑定路径 */
  getGoogleSafe: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/front/pass/googlesafe/addGoogleSafe'
  },
  /* 查询用户Google安全信息 */
  showGoogleSafe: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/front/pass/googlesafe/showGoogleSafe',
    cipher: false
  },
  /* 效验Google验证（不用） */
  checkGoogleSafe: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/front/pass/googlesafe/detection/checkGoogleSafe'
  },
  /* 开启/关闭 Google验证 */
  switchGoogleSafe: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/front/pass/googlesafe/switchGoogleSafe'
  },
  /* 退出登录 (不加密) */
  outLogin: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/deleteUserCache',
    scene: 'OTC',
    zlg: true
  },
  /* 精准查询用户信息 */
  findCenterUserMain: {
    gateway: '/BIFU-USERCENTER',
    path: '/api/findCenterUserMain',
    cipher: false
  },
  /* 检测是否是老用户的首次登录 */
  checkLogin: {
    gateway: '/BIFU-USERCENTER',
    path: '/center/front/pass/verifyOldUserFirstLogin'
  },
  /* 登录日志 */
  loginLog: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/queryloginLog',
    scene: 'OTC',
    zlg: true
  },
  /* 总资产 */
  allAssets: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/totalAsset',
    scene: 'OTC'
  },
  /* 查询单个用户所有币种资产 */
  queryAllAssets: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/list',
    cipher: false
  },
  /* 查询单币种账户余额 */
  queryBalance: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/account/singleCoin'
  },
  /* 获取cnt充值相关信息 */
  queryCntRechargeInfo: {
    gateway: '/ASSETSWEB',
    path: '/strict/asset/cnt/recharge'
  },
  /* 获取锁仓账户资产 */
  queryLockAsset: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/asset/account/lock'
  },
  /* 获取用户可用银行卡列表 */
  queryUserBankList: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/bankCardsRecord'
  },
  /* 添加银行卡 */
  addBank: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/putBankcard'
  },
  /* 查找银行卡名称 */
  searchBankName: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/validateCard'
  },
  withdrawCnt: {
    gateway: '/ASSETSWEB',
    path: '/strict/asset/cnt/cntcash'
  },
  /* 查询交易对余额 */
  queryTradePairBalance: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/asset/account/trade/queue'
  },
  /* 查询提币费率 */
  queryWithdrawFee: {
    gateway: '/BIFU-FINANCIAL',
    path: '/mgr/asset/coin/list'
  },
  /* 查询用户的所有订单明细(成交记录) */
  queryAllDetail: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/order/allList'
  },
  /* 查询一条委托下的所有订单详情(历史委托查看详情) */
  entrustList: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/order/entrustList'
  },
  /* 财务中心查询用户委托 */
  selectEntrustByFinance: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/entrust/selectEntrustByFinance'
  },
  /* 创建委托 */
  createEntrust: {
    gateway: '/TRADE',
    path: '/strict/trade/order',
    scene: 'OTC'
  },
  /* 改变委托状态 */
  updateEntrust: {
    gateway: '/ENTRUST',
    path: '/strict/entrust/updateEntrustStatus'
  },
  /* 查询交易对币种信息 */
  queryTradePairInfo: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/coin/tradePairCoin'
  },
  /* 查询交易对币种信息 */
  queryTradeFee: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/coin/coinsFee'
  },
  /* 查询所有币种国际码 */
  queryCoinsEunit: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/coin/allCoin'
  },
  /* 交易对搜索 */
  getAllTradePlatConf: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/coin/allTradePlatConf'
  },
  /* 交易对收藏列表 */
  collectList: {
    gateway: '/BIFU-MARKET',
    path: '/strict/collect/list'
  },
  /* 添加交易对收藏 */
  addCollect: {
    gateway: '/BIFU-MARKET',
    path: '/strict/collect/add'
  },
  /* 删除交易对收藏 */
  delCollect: {
    gateway: '/BIFU-MARKET',
    path: '/strict/collect/del'
  },
  /* 涨跌幅排行榜 */
  rateRank: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/notice/rankingNotice',
    cipher: false
  },
  /* 获取充币钱包地址 */
  getAdress: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/wallet/address/get'
  },
  /* 获取用户资产 */
  userAll: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/asset/account/userAll'
  },
  /* 提币 */
  drawing: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/transaction/userapplywithdrawcoin'
  },
  /* 获取单个用户充提记录 */
  userTransactionList: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/transaction/user/list'
  },
  /* 获取CNT充提记录 */
  queryCntTransactionList: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/asset/cnt/list'
  },
  /* 撤销提币 */
  cancelTransaction: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/transaction/cancel'
  },
  /* 撤销CNT充提 */
  cancelCntTransaction: {
    gateway: '/ASSETSWEB',
    path: '/strict/asset/cnt/cancel'
  },
  /* 新增提币地址 */
  addressAdd: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/wallet/out/addAdderss'
  },
  /* 删除提币地址 */
  addressDelete: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/wallet/out/address/delete'
  },
  /* 获取常用提币地址 */
  outAddress: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/wallet/out/address/get'
  },
  /* 流水记录 */
  hotRecord: {
    gateway: '/BIFU-ASSETSWEB',
    path: '/strict/asset/recordList'
  },
  /* 查询当前交易区列表 */
  queryAreaList: {
    gateway: '/BIFU-MARKET',
    path: '/fluent/coin/tradeAreas'
  },
  /* 帮助中心(获取所有（指定）文档类型) */
  getOctopusArticleTypes: {
    gateway: '/BIFU-OCTOPUS',
    path: '/front/getOctopusArticleTypes',
    cipher: false
  },
  /* 帮助中心(获取所有（指定）文档类型,包含每种类型下最多4个小标题) */
  getOctopusArticleVOs: {
    gateway: '/BIFU-OCTOPUS',
    path: '/front/getOctopusArticleVOs',
    cipher: false
  },
  /* 公告(获取指定文档类型下的所有文档基础信息) */
  getOctopusArticles: {
    gateway: '/BIFU-OCTOPUS',
    path: '/front/getOctopusArticles',
    cipher: false
  },
  /* 帮助中心和公告的详情(获取指定文档类型详细信息) */
  getOctopusArticleTail: {
    gateway: '/BIFU-OCTOPUS',
    path: '/front/getOctopusArticleTail',
    cipher: false
  },
  /* 找回密码 */
  findPassword: {
    gateway: '/BIFU-USERCENTER',
    path: '/front/instant/findPassword',
    scene: 'OTC',
    zlg: true
  },
  /* 绑定手机/邮箱地址 */
  bindAccountNumber: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/bindOtherAccount',
    scene: 'OTC',
    zlg: true
  },
  /* 校验手机/邮箱地址 */
  validateAccountNumber: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/validateBind'
  },
  /* 修改手机/邮箱地址 */
  removeAccountNumber: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/center/front/verify/updateAutWay'
  },
  /* 创建创建登录二维码数据 */
  findScanCode: {
    gateway: '/BIFU-USERCENTER',
    path: '/system/scan/code',
    cipher: false
  },
  /* 轮巡判断是否通过二维码登录 */
  findScanHeartbeat: {
    gateway: '/BIFU-USERCENTER',
    path: '/system/scan/heartbeat',
    cipher: false
  },
  /* 查询轮播图 */
  /* 已废弃，改为使用七牛静态资源 */
  findSlideshows: {
    gateway: '/BIFU-OCTOPUS',
    path: '/front/getSlideshows',
    cipher: false
  },
  /* 查询用户委托所有交易区 */
  selectEntrustAreaCurrencyEunit: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/entrust/selectEntrustAreaCurrencyEunit'
  },
  /* 查询app下载地址 */
  downAppUrl: {
    gateway: '/BIFU-OCTOPUS',
    path: '/octopusApp/downAppUrl',
    cipher: false
  },
  /* 导出用户流水记录 */
  getExport: {
    gateway: '/BIFU-FINANCIAL',
    path: '/strict/asset/hotrecord/export'
  },
  /* 币种搜索，获取币种列表 */
  getCoinInfos: {
    gateway: '/BIFU-OCTOPUS',
    path: '/octopusCoinInfo/selectCoinInfos',
    cipher: false
  },
  /* 获取指定币种信息 */
  getCoinInfoById: {
    gateway: '/BIFU-OCTOPUS',
    path: '/octopusCoinInfo/selectCoinInfoById',
    cipher: false
  },
  /* 抢购活动信息 */
  getRushInfo: {
    gateway: '/activity',
    path: '/rush/front/showShoppingStatus'
  },
  /* 抢购Erch */
  rushErch: {
    gateway: '/activity',
    path: '/strict/rush/verify/shopping'
  },
  /* 抢购时的资产信息 */
  rushBalance: {
    gateway: '/activity',
    path: '/strict/rush/verify/showMember'
  },
  /* raise 活动信息 */
  showSub: {
    gateway: '/activity',
    path: '/sub/front/showSub'
  },
  /* raise 资产信息 */
  showUserQuantity: {
    gateway: '/activity',
    path: '/strict/sub/verify/showUserQuantity'
  },
  /* raise 申购 */
  raiseShopping: {
    gateway: '/activity',
    path: '/strict/sub/verify/shopping'
  },
  // 获取用户积分
  findUserIntegral: {
    path: 'userAide/api/getUserAideBase'
  },

  /**
   * 法币相关接口
   */
  /* 获取法币账户资产 */
  findOtcAssetList: {
    gateway: '/BIFU-OTC',
    path: '/strict/asset/list',
    scene: 'OTC'
  },
  /* 获取法币账户资产折合 */
  findOtcAssetConvert: {
    gateway: '/BIFU-OTC',
    path: '/strict/asset/convert',
    scene: 'OTC'
  },
  findOrder: {
    gateway: '/BIFU-AIDE',
    path: '/strict/order/findOrder',
    scene: 'OTC'
  },

  findByUserIdAndEnable: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/findByLoginUserId',
    scene: 'OTC'
  },
  disableUserPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/disableUserPayment',
    scene: 'OTC'
  },
  enableUserPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/enableUserPayment',
    scene: 'OTC'
  },
  findByPaymentId: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/findByPaymentId',
    scene: 'OTC'
  },
  getBankName: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/getBankName',
    scene: 'OTC'
  },
  updateUserPayment: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPayment/updateUserPayment',
    scene: 'OTC',
    cipher: false
  },
  /* 抽奖活动-初始化用户 */
  initAccount: {
    gateway: '',
    path: '/rush/strict/lottery/verify/initializeAccount'
  },
  /* 抽奖活动-奖品列表 */
  prizeList: {
    gateway: '',
    path: '/rush/lottery/front/prizeList'
  },
  /* 抽奖活动-抽奖 */
  startLottery: {
    gateway: '',
    path: '/rush/strict/lottery/verify/lotteryWay'
  },
  /* 抽奖活动-中奖列表 */
  winnerList: {
    gateway: '',
    path: '/rush/lottery/front/winList'
  },
  /* 抽奖活动-购买抽奖次数 */
  buyRaffleChance: {
    gateway: '',
    path: '/rush/strict/lottery/verify/buyNum'
  },
  /* 抽奖活动-剩余抽奖次数 */
  lotteryChances: {
    gateway: '',
    path: '/rush/strict/lottery/verify/remainNum'
  },
  /* 抽奖活动-用户奖品 */
  userPrize: {
    gateway: '',
    path: '/rush/strict/lottery/verify/findUserPrize'
  },
  /* 内测发送验证码 */
  sendInsideCode: {
    gateway: '/BIFU-USERCENTER',
    path: '/strict/front/sendNotePlus',
    scene: 'OTC',
    zlg: true
  },

  /**
   * 2020.01.02新增
   * */
  /* 我的订单（借入借出） */
  c2cOrderList: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/list',
    scene: 'OTC'
  },
  /* 我的发布（借入借出） */
  c2cAdvertList: {
    gateway: '/BIFU-OTC',
    path: '/strict/talla/mine/list',
    scene: 'OTC'
  },

  /**
   *2020/2/13 新增多签钱包、智能合约等相关接口
   *  */
  /* 币种下-订单/广告列表 */
  orderAdvertList: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/withdrawal/select',
    scene: 'OTC'
  },
  /* 多签钱包、智能合约提币 */
  walletWithdraw: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/withdrawal',
    scene: 'OTC'
  },
  /* 多签钱包申请签名审批 */
  addSignature: {
    gateway: '/BIFU-OTC',
    path: '/strict/back/signature/add',
    scene: 'OTC'
  },
  /* 还款地址查询 */
  repaymentAddress: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/repay/addr',
    scene: 'OTC'
  },
  /* 多签签名源数据 */
  multiSignRawData: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/withdrawal/sign',
    scene: 'OTC'
  },
  /* 用户是否绑定硬件公钥 */
  publicKeyIsBound: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPublicKey/select',
    scene: 'OTC'
  },
  /* 绑定硬件公钥 */
  bindPublicKey: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/userPublicKey/add',
    scene: 'OTC'
  },
  /* 上报USDT转账交易源数据 */
  reportRawData: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/repay',
    scene: 'OTC'
  },
  /* 已平仓未收取手续费时-补充手续费 */
  outFeeWithdraw: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/deductCloseFee',
    scene: 'OTC'
  },
  /* 查询需补仓数量 */
  callMarginQuantity: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/cover/needQuantity',
    scene: 'OTC'
  },
  /* 查询用户是否授权USDT批量转账 */
  usdtIsApprove: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/repayAuth',
    scene: 'OTC'
  },
  /* 抵押人待确认订单列表 */
  mortgagorUnconfirmedOrder: {
    gateway: '/BIFU-OTCAIDE',
    path: '/strict/order/waitConfirm',
    scene: 'OTC'
  },
  /* 抵押人确认已还款订单 */
  confirmOrder: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/confirmRepay',
    scene: 'OTC'
  },
  /* 上报BTC多签签名数据 */
  reportBtcMultiSignData: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/withdrawal/signReport',
    scene: 'OTC'
  },
  /* 获取首页火币行情 */
  getHuobiList: {
    gateway: '/BIFU-TASK',
    path: '/quotes/list'
  },
  /* 根据hash获取btc1.trezor.io/api/v2/tx/接口数据 解决跨域 */
  fromHashToSign: {
    gateway: '/BIFU-OTC',
    path: '/strict/process/borrow/fromHashToSign',
    scene: 'OTC'
  },
  /* 标记订单消息未已读 */
  messageRead: {
    gateway: '/BIFU-OTC',
    path: '/strict/order/status/read',
    scene: 'OTC'
  }
}
