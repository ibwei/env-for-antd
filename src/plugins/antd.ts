import Vue from 'vue'
import { DatePicker, Button, message, Rate, ConfigProvider, Select, Result, Layout, Menu } from 'ant-design-vue'
import '../styles/index.less'

Vue.prototype.$message = message
window.message = message

Vue.use(DatePicker)
Vue.use(Button)
Vue.use(Select)
Vue.use(Rate)
Vue.use(ConfigProvider)
Vue.use(Select.Option)
Vue.use(Result)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Layout.Sider)
Vue.use(Layout.Header)
Vue.use(Layout.Content)
