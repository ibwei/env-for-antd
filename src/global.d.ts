import { Message } from 'ant-design-vue/types/message';
import { AxiosInstance } from 'axios';
declare global {
  interface Window {
    message: Message
    ajax: AxiosInstance
  }
}
