import axios from 'axios'

const GATEWAY = '/BIFU-KLINE'
const service = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}bfapi${GATEWAY}`
})
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.resolve(0)
  }
)

class KlineService {
  /**
   * 交易所配置
   */
  config() {
    return service.get('/config')
  }

  /**
   * 币种配置
   *
   * @params {*} symbol 币种国际码
   */
  symbols(symbol) {
    return service.get('/symbols', { params: { symbol } })
  }

  /**
   * 历史数据
   *
   * @params {*} symbol 币种国际码
   * @params {*} resolution k线周期
   * @params {*} from 起始时间
   * @params {*} to 结束时间
   * @params {*} cycle 借贷周期
   */
  history(params) {
    return service.get('/history', { params: params })
  }

  /**
   * 交易所服务端时间
   */
  serverTime() {
    return service.get('/time')
  }
}

export default new KlineService()
