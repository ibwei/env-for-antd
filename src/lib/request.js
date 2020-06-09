"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
var getErrorCode2text = function (response) {
    /** http status code */
    var code = response.status;
    /** notice text */
    var message = 'Request Error';
    switch (code) {
        case 400:
            message = 'Request Error';
            break;
        case 401:
            message = 'Unauthorized, please login';
            break;
        case 403:
            message = 'Access denied';
            break;
        case 404:
            message = 'Request address error';
            break;
        case 408:
            message = 'Request timeout';
            break;
        case 500:
            message = 'Internal server error';
            break;
        case 501:
            message = 'Service not implemented';
            break;
        case 502:
            message = 'Gateway error';
            break;
        case 503:
            message = 'Service is not available';
            break;
        case 504:
            message = 'Gateway timeout';
            break;
        case 505:
            message = 'HTTP version is not supported';
            break;
        default:
    }
    return message;
};
/**
 *  HINT:
 * .then return {data,status,headers...}
 * see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
var service = axios_1["default"].create({
    baseURL: 'https://api.abckey.com',
    timeout: 10000
});
/**
 * 返回格式为 {err_code:0|1,err_msg:'string',data:any}
 */
service.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // check network
        /* TODO add http headers
         const token = window.localStorage.getItem('token')
         config.headers = {
          ...config.headers,
          Authorization: token
        } */
        return [2 /*return*/, config];
    });
}); });
// return response interceptors
service.interceptors.response.use(
// response valid
function (response) { return __awaiter(void 0, void 0, void 0, function () {
    var __text;
    return __generator(this, function (_a) {
        if (response.status === 200) {
            return [2 /*return*/, Promise.resolve(response)];
        }
        else {
            __text = getErrorCode2text(response);
            return [2 /*return*/, Promise.reject({ err_code: 1, err_msg: __text })];
        }
        return [2 /*return*/];
    });
}); }, 
// invalid response
function (error) {
    var _a, _b;
    var __emsg = error.message || '';
    if (error.message) {
        __emsg = error.message;
    }
    if (error.response) {
        __emsg = error.response.data.msg;
    }
    // timeout
    if (__emsg.indexOf('timeout') >= 0) {
        __emsg = 'timeout';
    }
    if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) === 401) {
        return Promise.reject({ err_code: 1, err_msg: '', error: error });
    }
    return Promise.reject({ err_code: 1, err_msg: '', error: error });
});
exports["default"] = service;
