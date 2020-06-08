import Vue from 'vue'
import { DatePicker, Button, message, Rate, ConfigProvider, Select, Result } from 'ant-design-vue'
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
