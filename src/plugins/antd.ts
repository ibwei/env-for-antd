import Vue from 'vue'
import { DatePicker, Button, message, Rate, ConfigProvider, Select } from 'ant-design-vue'

Vue.prototype.$message = message
Vue.use(DatePicker)
Vue.use(Button)
Vue.use(Select)
Vue.use(Rate)
Vue.use(ConfigProvider)
Vue.use(Select.Option)
