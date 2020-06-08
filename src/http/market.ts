import HTTP from './request'
interface HttpParams {
  coinName: string;
  cashName: string;
}

export interface MarketApi {
  coin2cash(param: HttpParams): Promise<any>;
}

/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
class Market {
  static coin2cash(param: HttpParams): Promise<any> {
    let targetCoin = ''
    switch (param.coinName.toLowerCase()) {
      case 'tbtc':
        targetCoin = 'btc'
        break
      case 'trop':
        targetCoin = 'eth'
        break
      case 'tusdt':
        targetCoin = 'usdt'
        break
      default:
        targetCoin = param.coinName.toLowerCase()
    }
    return HTTP.get<{ data: string | { error: string } }>(`/market/${targetCoin}/${param.cashName.toLowerCase()}`, {
      params: {
        t: new Date().getTime()
      }
    }).then(({ data }) => data)
  }
}

export default Market
