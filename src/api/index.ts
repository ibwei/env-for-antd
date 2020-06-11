import { message } from 'ant-design-vue'

// 统一的错误处理
class ApiService {
  static async send(request: Promise<any>): Promise<any> {
    try {
      const res = await request
      if (res) {
        console.log(res)
        return res
      } else {
        console.log(res)
        return res
      }
    } catch ($e) {
      console.log($e)
      message.error('Network Error')
    }
  }
}

export default ApiService
