import { filter } from 'lodash'

/**
 * C2C借贷交易常量
 * */

/**
 * btc转账手续费列表
 * */
export const FEE_MODELS = [
  {
    id: 0,
    label: '高',
    value: '14',
    unit: 'Sat/B'
  },
  {
    id: 1,
    label: '正常',
    value: '12',
    unit: 'Sat/B'
  },
  {
    id: 2,
    label: '经济',
    value: '1',
    unit: 'Sat/B'
  },
  {
    id: 3,
    label: '低',
    value: '1',
    unit: 'Sat/B'
  },
  {
    id: 99,
    label: '自定义',
    value: '',
    unit: ''
  }
]

/**
 * usdt转账手续费列表
 * */
export const USDT_FEE_MODELS = [
  {
    id: 0,
    label: '高',
    value: '10',
    unit: 'Gwei'
  },
  {
    id: 1,
    label: '正常',
    value: '5',
    unit: 'Gwei'
  },
  {
    id: 2,
    label: '经济',
    value: '3',
    unit: 'Gwei'
  }
]

/*购买U盾地址*/
export const SHOP_LINK = 'https://www.dfukey.com/purchase'
/*钱包管理地址*/
export const WALLET_LINK = 'https://dfukey.com/key/index.html'

/*借贷周期*/
export const LOAN_CYCLE = [
  { text: '7天', value: 7 },
  { text: '15天', value: 15 },
  { text: '30天', value: 30 },
  { text: '60天', value: 60 },
  { text: '90天', value: 90 },
  { text: '180天', value: 180 }
]

/*申诉类型*/
export const APPEAL_TYPES = [
  {
    value: 0,
    label: '对方未转账'
  },
  {
    value: 1,
    label: '对方未确认转账'
  },
  {
    value: 2,
    label: '对方无应答'
  },
  {
    value: 3,
    label: '对方有欺诈行为'
  },
  {
    value: 4,
    label: '其他'
  }
]

/**
 * ctc利率交易常量
 * */
export const DEAL_STATUS = [
  {
    value: 0,
    label: '进行中'
  },
  {
    value: 1,
    label: '已抵押'
  },
  {
    value: 2,
    label: '取消'
  },
  {
    value: 3,
    label: '申诉'
  },
  {
    value: 4,
    label: '已还款'
  },
  {
    value: 5,
    label: '待平仓'
  },
  {
    value: 6,
    label: '已平仓'
  }
]

/***************************************************************************
 * c2c订单里，抵押人（borrow）和投资人(lend)的订单状态和可用的操作不一样
 * 为防止意外，状态冗余，但是操作(ACTION)严格按照角色分别控制
 * *************************************************************************/

/**
 * c2c订单状态常量
 * */
export const ORDER_STATUS = [
  {
    value: 0,
    label: '待交割'
  },
  {
    value: 1,
    label: '交割中'
  },
  {
    value: 2,
    label: '待抵押'
  },
  {
    value: 3,
    label: '已抵押'
  },
  {
    value: 4,
    label: '待还款'
  },
  {
    value: 5,
    label: '待付款'
  },
  {
    value: 6,
    label: '已付款'
  },
  {
    value: 7,
    label: '待收款'
  },
  {
    value: 8,
    label: '待补仓'
  },
  {
    value: 9,
    label: '异常'
  },
  {
    value: 10,
    label: '已逾期'
  },
  {
    value: 101,
    label: '已平仓'
  },
  {
    value: 102,
    label: '已结束'
  },
  {
    value: 103,
    label: '已取消'
  },
  {
    value: 104,
    label: '待签名'
  },
  {
    value: 105,
    label: '待审核'
  },
  {
    value: 106,
    label: '待提币' // 投资人违约，抵押人取回抵押物 抵押人状态
  },
  {
    value: 107,
    label: '待提币' // 正常还款提币 双方状态
  },
  {
    value: 108,
    label: '待提币' //已经平仓，但是手续费不足，显示为待提币等投资人充值手续费 投资人的状态
  },
  {
    value: 109,
    label: '提币中'
  },
  {
    value: 110,
    label: '待确认'
  }
]

/**
 * c2c借入订单可搜索状态常量
 * */

export const BORROW_ORDER_SEARCH_STATUS = (status => {
  return filter(ORDER_STATUS, item => {
    return status.includes(item.value)
  })
})([0, 1, 2, 3, 4, 6, 8, 9, 10, 101, 102, 103, 105, 107, 110])

/**
 * c2c借出订单可搜索状态常量
 * */
export const LEND_ORDER_SEARCH_STATUS = (status => {
  return filter(ORDER_STATUS, item => {
    return status.includes(item.value)
  })
})([0, 1, 3, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 108, 110])

/**
 * c2c订单可撤销-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_REVOKE_STATUS = [0]
export const LEND_ACTION_REVOKE_STATUS = [0]

/**
 * c2c订单可查看详情-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_CHECK_STATUS = [
  // 1,
  // 2,
  // 3,
  // 4,
  5, // 后面添加的
  // 6,
  // 8,
  9,
  // 10,
  101,
  102,
  103,
  104, // 后面添加的
  105,
  // 106,
  // 107,
  109,
  110
]
export const LEND_ACTION_CHECK_STATUS = [
  1,
  2, // 后面添加
  // 3,
  4, // 后面添加
  // 5,
  // 6,
  7,
  8,
  9,
  10,
  101,
  102,
  103,
  104,
  105,
  // 106, // 后面添加
  // 107, // 后面添加
  // 108,
  109,
  110
]

/**
 * c2c订单可交割-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_DELIVERY_STATUS = [1, 2, 3, 6, 7]
export const LEND_ACTION_DELIVERY_STATUS = [3, 5, 6]

/**
 * c2c订单可还款-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_REPAY_STATUS = [4, 8, 10]

/**
 * c2c订单可签名-状态集
 * @ORDER_STATUS
 * */
export const LEND_ACTION_SIGN_STATUS = [104]

/**
 * c2c订单可提币-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_WITHDRAW_STATUS = [106, 107, 108]

/**
 * c2c订单可补仓-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_CALL_MARGIN_STATUS = [8]

/**
 * c2c订单可提币-已平仓未收取手续费-状态集
 * @ORDER_STATUS
 * */
export const LEND_ACTION_OUTFEE_WITHDRAW_STATUS = [108]

/**
 * c2c订单需确认-状态集
 * @ORDER_STATUS
 * */
export const BORROW_ACTION_CONFIRM_STATUS = [110]

/**
 * c2c提币理由
 * @REASONS
 * */
export const WITHDRAW_REASONS = [
  {
    id: 0,
    label: '借贷赎回'
  },
  {
    id: 1,
    label: '平仓'
  },
  {
    id: 2,
    label: '交割未完成'
  },
  {
    id: 3,
    label: '发生借贷争议，申请赎回'
  },
  {
    id: 4,
    label: '对方未付款'
  }
]
