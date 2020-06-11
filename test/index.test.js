const assert = require('assert')
const Market = require('../src/lib/market.api').default

describe('测试币种汇率接口', () => {
  it('币种汇率应该返回数字,形如:28898,或者 3688.989', async () => {
    const rate = await Market.coin2cash({ cashName: 'cny' })
    const reg = /([0-9]+\.[0-9]+)|(\d)+/g
    assert.equal(reg.test(rate), true)
  })
})
