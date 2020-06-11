"use strict";
exports.__esModule = true;
var request_1 = require("./request");
/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
var Market = /** @class */ (function () {
    function Market() {
    }
    Market.coin2cash = function (param) {
        param.coinName = param.coinName ? param.coinName : 'btc';
        param.cashName = param.cashName ? param.cashName : 'cny';
        var targetCoin = '';
        switch (param.coinName.toLowerCase()) {
            case 'tbtc':
                targetCoin = 'btc';
                break;
            case 'trop':
                targetCoin = 'eth';
                break;
            case 'tusdt':
                targetCoin = 'usdt';
                break;
            default:
                targetCoin = param.coinName.toLowerCase();
        }
        return request_1["default"].get("/market/" + targetCoin + "/" + param.cashName.toLowerCase(), {
            params: {
                t: new Date().getTime()
            }
        }).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    return Market;
}());
exports["default"] = Market;
