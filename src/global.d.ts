import { Message } from 'ant-design-vue/types/message';
import { AxiosInstance } from 'axios';
import { MarketApi } from './http/market';
declare global {
  interface Window {
    message: Message
    ajax: AxiosInstance
    api: MarketApi
  }
}
