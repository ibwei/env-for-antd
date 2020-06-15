import Vue from 'vue'
import Axios from 'axios'
import Apis from './apis.js'
import store from '@/store'
import router from '@/router'
import encryption from '@/utils/rsa'
import { find, isEmpty, forOwn } from 'lodash'
import vm from '../main'
import { setTimeout } from 'timers'
/* eslint-disable */

const EspecialURL = [
  'asset/hotrecord/export',
  'banner/banner.json',
  'https://btc1.trezor.io',
  'https://api.eth.mixcdn.co',
  'https://ethgasstation.info',
  'trezor'
]

const service = Axios.create({
  // withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    deviceType: 'browser'
  }
})

let tokenLock = false // 刷新token时加锁
let refresh // 刷新的异步请求
let loggingOut = false // 退出锁
let isError = false

// 请求拦截器
service.interceptors.request.use(
  // 请求拦截器
  (config) => {
    if (config.method == 'GET' || config.method == 'get') {
      config.headers = {}
    }

    // 独立的接口，不需要做下一步处理
    if (
      config.url.indexOf(EspecialURL[1]) != -1 ||
      config.url.indexOf(EspecialURL[2]) != -1 ||
      config.url.indexOf(EspecialURL[3]) != -1 ||
      config.url.indexOf(EspecialURL[4]) != -1 ||
      config.url.indexOf(EspecialURL[5]) != -1
    ) {
      return config
    }

    // 正在刷新token，需等待刷新
    if (tokenLock) {
      /*不拦截刷新token的请求 */
      if (config.url == 'updateToken') {
        return customizedRequest(config)
      } else {
        return refresh
          .then(() => {
            return customizedRequest(config)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    } else {
      return customizedRequest(config)
    }
  },
  function (err) {
    return Promise.reject(err)
  }
)

// 返回拦截器
service.interceptors.response.use(
  function (response) {
    // 如果匹配到特殊到URL，则直接返回数据，不做处理
    for (let i = 0; i < EspecialURL.length; i++) {
      if (response.config.url.indexOf(EspecialURL[i]) != -1) return response
    }

    let codeCategory = classifyCode(response.data.code)
    switch (codeCategory) {
      case 'success':
        return response.data
      case 'business':
        return response.data
      case 'commonError':
        return handleCommonError(response)
      case 'tokenError':
        return handleTokenError(response)
      case 'error':
        vm.$message.warning(response.data.message)
        return Promise.resolve(0)
      default:
        return response.data
    }
  },
  function (error) {
    if (error.response) {
      vm.$message.error(`${error.response.status}:${error.response.statusText}`)
      return Promise.reject(error.response.data)
    } else {
      // 避免多次调用错误提示
      if (!isError) {
        vm.$message.error('当前网络不可用，请检查您的网络设置')
      }
      isError = true
      setTimeout(() => {
        isError = false
      }, 2000)

      return Promise.resolve(0)
    }
  }
)

// 根据状态码返回对应到状态
const classifyCode = (code) => {
  /*
    @response.data.code:200,success。
    @response.data.code:500等三位数code为通用错误代码，不涉及业务操作。
    @response.data.code:5100,5200等四位数code为业务需求代码，每个接口需要独立处理code。
    */
  if (code == 200) {
    return 'success'
  } else if (code >= 500 && code < 600) {
    return 'commonError'
  } else if (code >= 600 && code < 700) {
    return 'tokenError'
  } else if (code >= 1000 && code < 10000) {
    return 'business'
  } else {
    return 'error'
  }
}

// 错误处理
const handleCommonError = (response) => {
  switch (response.data.code) {
    case 501: // 账户被冻结
      vm.$message.error(response.data.message)
      logout()
      return Promise.resolve(0)
    case 510: // 需要谷歌验证码
      return vm
        .$googleVerify(response)
        .then((data) => {
          return data
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    case 520: // 需要手机验证码
      return vm
        .$accountNumberVerify(response)
        .then((data) => {
          return data
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    case 530: // 需要资金安全码
      return vm
        .$assetVerify(response)
        .then((data) => {
          return data
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    case 540: // 需要邮箱验证码
      return vm
        .$accountNumberVerify(response)
        .then((data) => {
          return data
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    default:
      vm.$message.warning(response.data.message)
      return Promise.resolve(0)
  }
}

// 错误处理
const handleTokenError = (response) => {
  switch (response.data.code) {
    case 600: // 登录失败或未登录
    case 601: // 用户token不正确
    case 603: // 验证码不正确
    case 604: // 同一用户在多处登录
    case 605: // 刷新token已过期
    case 606: // 用户token非本人申请
      logout()
      return Promise.resolve(0)
    case 602: // token已经过期，重发请求
      if (tokenLock) {
        return refresh
          .then(() => {
            return reRequest(response.config)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      } else {
        refresh = updateToken()
          .then(() => {
            return reRequest(response.config)
              .then((data) => {
                return data
              })
              .catch((err) => {
                return Promise.reject(err)
              })
          })
          .catch((err) => {
            console.log('logout')
            return Promise.reject(err)
          })
        return refresh
      }
    default:
      return response.data
  }
}

// 登出
const logout = () => {
  if (loggingOut || isEmpty(store.state.user.userInfo)) {
    return
  }
  loggingOut = true
  vm.$message.destroy()
  vm.$message.warning('登录已失效，请重新登录')
  router.replace({
    name: 'login',
    query: {
      uri: window.location.href
    }
  })
  tokenLock = false
  loggingOut = false
}

// 刷新token
export function updateToken() {
  tokenLock = true
  return new Promise((resolve, reject) => {
    service
      .post('updateToken', {
        refreshToken: store.state.user.refresh_token,
        userId: store.state.user.userId
      })
      .then((res) => {
        if (res.code === 200) {
          store.dispatch('user/updateUserToken', res.data)
          tokenLock = false
          resolve()
        } else {
          logout()
          reject(res)
        }
      })
      .catch((error) => {
        logout()
        reject(error)
      })
  })
}

// 重新请求
const reRequest = (config) => {
  return new Promise((resolve, reject) => {
    service(config)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 定制请求的config
const customizedRequest = (config) => {
  let api = Apis[config.url]
  let cipherFlag = true

  if (api) {
    if (api.gateway === '/activity') {
      // 活动接口
      config.url = `${api.gateway}${api.path}`
    } else if (!api.gateway) {
      // 没有网关的特殊接口
      config.url = `${api.path}`
    } else if (api.proxy) {
      // 其他特殊标示的接口
      config.baseURL = api.test ? 'http://192.168.31.128:8082' : 'http://192.168.31.218:8082'
      config.url = api.path
    } else if (api.proxyURL) {
      config.baseURL = api.proxyURL
      config.url = api.path
    } else {
      config.url = `/bfapi${api.gateway}${api.path}`
    }

    // 不需要加密的接口
    if (api.cipher == false) {
      cipherFlag = false
    }
    // 卓立刚的接口需要把所有数字转为字符串
    if (api.zlg === true) {
      config = numberToString(config)
    }
    if (api.path.indexOf('/strict') != -1) {
      config.headers.Authorization = `Bearer ${store.state.user.userToken.access_token}`
      config.headers.userId = store.state.user.userToken.userId
      // 请求二进制数据
      if (config.url.indexOf(EspecialURL[1]) != -1) {
        config.responseType = 'blob'
      }
    }

    // 进行加密
    if (cipherFlag) {
      if (api.scene === 'OTC') {
        config = encryptionOnly(config)
      } else {
        config = encryptionData(config)
      }
    }
  } else {
    if (config.url.indexOf('/strict') != -1) {
      let token = store.state.user.userToken.access_token
      let userId = store.state.user.userToken.userId
      config.headers.Authorization = `Bearer ${token}`
      config.headers.userId = userId
    }
  }
  return config
}

// 参数进行加密处理
const encryptionData = (config, verifyCode, verifyType) => {
  let key = config.method.toUpperCase() === 'POST' ? 'data' : 'params'
  try {
    if (verifyCode != undefined && verifyType != undefined) {
      let data = JSON.parse(config[key])
      console.log('追加的内容：', verifyCode, verifyType)
      data.note = JSON.stringify(
        encryption({
          verifyCode,
          verifyType
        })
      )
      config[key] = data
    } else {
      let data = config[key]
      if (data) {
        console.log('加密前的地址:', config.url)
        console.log('加密前的参数:', data)
        config[key] = {
          ciphertext: JSON.stringify(encryption(data))
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
  return config
}

const encryptionOnly = (config) => {
  let key = config.method.toUpperCase() === 'POST' ? 'data' : 'params'
  try {
    let data = config[key]
    if (data) {
      console.log('加密前的地址:', config.url)
      console.log('加密前的参数:', data)
      config[key] = encryption(data)
    }
  } catch (error) {
    console.log(error)
  }
  return config
}

const numberToString = (config) => {
  let key = config.method.toUpperCase() === 'POST' ? 'data' : 'params'
  try {
    let data = config[key]
    if (data) {
      console.log('字符串化前的参数:', data)
      forOwn(data, (value, key) => {
        if (typeof value === 'number') {
          data[key] = value.toString()
        }
      })
      config[key] = data
    }
  } catch (error) {
    console.log(error)
  }
  return config
}

/**
 * 短信/邮箱验证
 *
 * @param {*} response 当前请求信息
 */
Vue.prototype.$accountNumberVerify = function (response) {
  try {
    !window.$MSG_BOX && (window.$MSG_BOX = vm.$msgbox)
  } catch (error) {
    console.log(error)
  }
  const h = this.$createElement
  const code = response.data.code
  let url = response.config.url,
    mobile,
    mode

  // 判断时短信还是邮箱
  if (code == 520) mode = 'mobile'
  if (code == 540) mode = 'email'

  if (!code) return console.log('传入的状态码不正确')

  // 登陆和找回密码接口，从参数里获取手机号/邮箱
  if (
    url.includes('/system/auth/login') ||
    url.includes('/center/front/pass/detection/findPassword')
  ) {
    mobile = response.data.data
  } else {
    // 从用户信息获取手机号/邮箱
    let userInfo = vm.$store.state.user.userInfo
    mobile = userInfo[mode] || ''
  }

  console.log('验证框的mobile:', mobile)

  return new Promise((resolve, reject) => {
    this.$msgbox({
      title: '验证提示',
      content: h('VerifyModal', {
        props: {
          mode: mode,
          number: mobile,
          targetUrl: url.substring(url.indexOf('/bfapi') + 6)
        },
        key: new Date().getTime()
      }),
      closeOnClickModal: false,
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      beforeClose: (action, instance, done) => {
        /*找到手机验证实例 */
        let formInstance = find(instance.$children, (item) => {
          return item.$ownComponentName == 'VerifyModal'
        })
        if (action === 'confirm') {
          /*表单验证 */
          formInstance.$refs['VerifyModalForm'].validate((valid) => {
            if (!valid) return
            /*傻逼操作--登录不需要加密 */
            let newConfig = {}
            if (url.includes('/system/auth/login')) {
              let data = JSON.parse(response.config.data)
              data.verifyType = code
              data.verifyCode = formInstance.formData.code
              response.config.data = JSON.stringify(data)
              newConfig = {
                ...response.config
              }
            } else {
              newConfig = encryptionData(
                response.config,
                formInstance.formData.code,
                response.data.code
              )
            }
            console.log(newConfig)
            reRequest(newConfig)
              .then((res) => {
                resolve(res)
              })
              .catch((err) => {
                reject(err)
              })
            formInstance.formData.code = ''
            done()
          })
        } else {
          formInstance.formData.code = ''
          resolve(0)
          done()
        }
      }
    })
  })
}

/**
 * 谷歌验证
 *
 * @param {*} response 当前请求信息
 */
Vue.prototype.$googleVerify = function (response) {
  try {
    !window.$MSG_BOX && (window.$MSG_BOX = vm.$msgbox)
  } catch (error) {
    console.log(error)
  }
  return new Promise((resolve, reject) => {
    this.$prompt('请输入谷歌验证码', '验证提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      inputPattern: /^\d{6}$/,
      inputErrorMessage: '谷歌验证码不正确'
    })
      .then(({ value }) => {
        let newConfig = encryptionData(response.config, value, 510)
        reRequest(newConfig)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
      .catch(() => {
        resolve(0)
      })
  })
}

/**
 * 资金安全码验证
 *
 * @param {*} response 当前请求信息
 */
Vue.prototype.$assetVerify = function (response) {
  try {
    !window.$MSG_BOX && (window.$MSG_BOX = vm.$msgbox)
  } catch (error) {
    console.log(error)
  }
  return new Promise((resolve, reject) => {
    this.$prompt('请输入资金安全码', '验证提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      inputType: 'password',
      inputPattern: /^.{6,18}$/,
      inputErrorMessage: '资金安全码不正确'
    })
      .then(({ value }) => {
        let newConfig = encryptionData(response.config, value, 530)
        reRequest(newConfig)
          .then((res) => {
            console.log(res)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
      .catch(() => {
        resolve(0)
      })
  })
}

/**
 * 二次验证
 *
 * @param {*} $router 路由对象
 */
Vue.prototype.$twoVerify = function ($router) {
  try {
    !window.$MSG_BOX && (window.$MSG_BOX = vm.$msgbox)
  } catch (error) {
    console.log(error)
  }
  const h = this.$createElement
  return new Promise((resolve, reject) => {
    this.$msgbox({
      title: '二次验证绑定',
      center: true,
      message: h('TwoVerifyModal', {
        props: {
          $router
        }
      }),
      showClose: true,
      customClass: 'two-verify-modal-container',
      showCancelButton: false,
      showConfirmButton: false,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      beforeClose: (action, instance, done) => {
        done()
      }
    })
      .then((action) => {
        console.log(action)
        resolve('wancheng')
      })
      .catch((err) => {
        console.log(err)
        reject('quxiao')
      })
  })
}

Vue.prototype.$get = function (url, params) {
  return service.get(url, params)
}
Vue.prototype.$post = function (url, params) {
  return service.post(url, params)
}

export default service
