import Vue from 'vue'
import { Card, DatePicker, Button, message, Rate, Icon, ConfigProvider, Select, Result, Layout, Menu, Form, Tabs, Table, Input, Alert, Checkbox, Row, Col, Popover, Progress, Tag } from 'ant-design-vue'

import '../styles/index.less'

Vue.prototype.$message = message
window.message = message

Vue.use(DatePicker)
Vue.use(Button)
Vue.use(Select)
Vue.use(Icon)
Vue.use(Rate)
Vue.use(ConfigProvider)
Vue.use(Select.Option)
Vue.use(Result)
Vue.use(Menu)
Vue.use(Table)
Vue.use(Layout)
Vue.use(Layout.Sider)
Vue.use(Layout.Header)
Vue.use(Layout.Content)
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(Tabs)
Vue.use(Tabs.TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Input.Password)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Card)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Tag)
