import { Message } from 'ant-design-vue/types/message';
import { AxiosInstance } from 'axios';
import { MarketApi } from './api/market.api';
import { I18nOptions } from 'vue-i18n';
declare global {
  interface Window {
    message: Message
    ajax: AxiosInstance
    api: MarketApi,
    i18n: I18nOptions
  }
}
