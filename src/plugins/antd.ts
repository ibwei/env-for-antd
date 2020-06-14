// @ts-nocheck
import Vue from 'vue'
import {
  DatePicker,
  Button,
  message,
  Rate,
  Icon,
  ConfigProvider,
  Select,
  Result,
  Layout,
  Menu,
  Form,
  Tabs,
  Table,
  Input,
  Alert,
  Checkbox,
  Card,
  Popover,
  Progress,
  Row,
  Col,
  Tag,
  Dropdown,
  Badge,
  Avatar,
  FormModel,
  Modal
} from 'ant-design-vue'
import '../styles/index.less'

Vue.use(FormModel)
Vue.use(FormModel.Item)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(Badge)
Vue.use(DatePicker)
Vue.use(Button)
Vue.use(Select)
Vue.use(Icon)
Vue.use(Rate)
Vue.use(ConfigProvider)
Vue.use(Select.Option)
Vue.use(Result)
Vue.use(Menu)
Vue.use(Menu.SubMenu)
Vue.use(Menu.Divider)
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
Vue.use(Modal)

Vue.prototype.$message = message

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$prompt = Modal.confirm
Vue.prototype.$msgbox = Modal.info
Vue.prototype.$alert = Modal.warning
