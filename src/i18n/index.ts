/**
 * vue-i18n
 * see more : https://kazupon.github.io/vue-i18n/zh/guide/lazy-loading.html
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Axios from 'axios'
import moment from 'moment'

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en from 'ant-design-vue/lib/locale-provider/en_US'

import Store from '@/store'
import messages from './messages/en'

Vue.use(VueI18n)

const __LANGS__ = ['en']
let __LOCALE__ = Store.__s('app.language')

if (!__LOCALE__) {
  __LOCALE__ = window.navigator.language.split('-').join('')
  Store.__s('app.language', __LOCALE__)
}

const i18n = new VueI18n({
  locale: __LOCALE__,
  // fallbackLocale: 'enUS',
  silentTranslationWarn: false,
  messages
})

// moment转换时间表
export const TranslateTable = {
  en: 'en_us',
  zhCN: 'zh_cn'
}

// 需要加载的antd组件语言
export const locales = {
  en,
  zhCN
}

/**
 * @functin setLang - set the app's language
 * @param {string} lang - the language will be setted
 * @return {string} lang - langguage name
 */
function _set(lang: string): string {
  i18n.locale = lang
  // i18n.fallbackLocale = lang
  // 设置当前语言的时间
  moment.locale(TranslateTable[lang])
  Axios.defaults.headers.common['Accept-Language'] = lang
  Store.__s('app.language', lang)
  return lang
}

/**
 * @functin loadLangAsync - load language asynchronous
 * @param {string} lang - the language will be loading
 * @return {string} lang - loaded language name
 */
export function setLang(lang: string): Promise<string> {
  if (__LOCALE__ !== __LANGS__) {
    if (!__LANGS__.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/messages/${lang}`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default[lang])
        __LANGS__.push(lang)
        return _set(lang)
      })
    }
    return Promise.resolve(_set(lang))
  }
  return Promise.resolve(lang)
}

setLang(__LOCALE__) // initialization
export default i18n
