import { Message } from 'ant-design-vue/types/message';
import { AxiosInstance } from 'axios';
import { MarketApi } from './api/market.api';
declare global {
  interface Window {
    message: Message
    ajax: AxiosInstance
    api: MarketApi
  }
}
