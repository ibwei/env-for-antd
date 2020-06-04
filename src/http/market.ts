import HTTP from './request'

interface HttpParams {
  coinName: string;
  cashName: string;
}

/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
export const Coin2Cash = (param: HttpParams) => {
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
