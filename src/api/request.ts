import Axios, { AxiosResponse } from 'axios'

/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
const getErrorCode2text = (response: AxiosResponse) => {
  /** http status code */
  const code = response.status
  /** notice text */
  let message = 'Request Error'
  switch (code) {
    case 400:
      message = 'Request Error'
      break
    case 401:
      message = 'Unauthorized, please login'
      break
    case 403:
      message = 'Access denied'
      break
    case 404:
      message = 'Request address error'
      break
    case 408:
      message = 'Request timeout'
      break
    case 500:
      message = 'Internal server error'
      break
    case 501:
      message = 'Service not implemented'
      break
    case 502:
      message = 'Gateway error'
      break
    case 503:
      message = 'Service is not available'
      break
    case 504:
      message = 'Gateway timeout'
      break
    case 505:
      message = 'HTTP version is not supported'
      break
    default:
  }
  return message
}

/**
 *  HINT:
 * .then return {data,status,headers...}
 * see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: 'https://api.abckey.com',
  timeout: 10000
})

// request interceptors

interface ApiResponse {
  err_code: number;
  err_msg?: string;
  data?: any;
}

/**
 * 返回格式为 {err_code:0|1,err_msg:'string',data:any}
 */
service.interceptors.request.use(async (config) => {
  // check network
  /* TODO add http headers
   const token = window.localStorage.getItem('token')
   config.headers = {
    ...config.headers,
    Authorization: token
  } */

  return config
})

// return response interceptors
service.interceptors.response.use(
  // response valid
  async (response: any) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      const __text = getErrorCode2text(response)
      return Promise.reject(new Error(__text))
    }
  },
  // invalid response
  (error: any) => {
    let __emsg: string = error.message || ''

    if (error.message) {
      __emsg = error.message
    }

    if (error.response) {
      __emsg = error.response.data.msg
    }
    // timeout
    if (__emsg.indexOf('timeout') >= 0) {
      __emsg = 'timeout'
    }

    if (error?.response?.data?.code === 401) {
      return Promise.reject(new Error('Unauthorized, please login'))
    }
    return Promise.reject(new Error(__emsg))
  }
)

export default service
