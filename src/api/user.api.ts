import HTTP from './request'
interface HttpParams {
  coinName: string;
  cashName: string;
}

interface LoginParams {

}

export interface UserApi {
  coin2cash(param: HttpParams): Promise<any>;
}

/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
class User {
  register() {
    /*  return HTTP.get<{ data: string | { error: string } }>(`/market/${targetCoin}/${param.cashName.toLowerCase()}`, {
       params: {
         t: new Date().getTime()
       }
     }).then(({ data }) => data) */
  }
}

export default Market
