"use strict";
exports.__esModule = true;
/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.register = function () {
        /*  return HTTP.get<{ data: string | { error: string } }>(`/market/${targetCoin}/${param.cashName.toLowerCase()}`, {
           params: {
             t: new Date().getTime()
           }
         }).then(({ data }) => data) */
    };
    return User;
}());
exports["default"] = User;
