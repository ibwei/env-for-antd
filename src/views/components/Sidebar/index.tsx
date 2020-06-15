import { Component, Prop, Vue } from 'vue-property-decorator'
import { SidebarOption } from '@/interface/index'
import Store from '@/store'

@Component
export default class Spin extends Vue {
  /* Prop */
  @Prop({ default: null }) MenuList!: Array<SidebarOption>

  /* data */

  // 当前选中的 key
  currentKey: Array<string> = ['0-1']
  // 当前打开的子菜单 key
  openKeys: Array<string> = ['0']
  // 所有的子菜单 key
  rootSubmenuKeys: Array<string> = []

  /* Life cycle */

  created() {
    const tabKeys = Store.__s('openKeys')
    if (tabKeys.length > 0) {
      this.openKeys = tabKeys
    }
  }

  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.openKeys = openKeys
      Store.__s('openKeys', openKeys)
    } else {
      this.openKeys = latestOpenKey ? [latestOpenKey] : []
      Store.__s('openKeys', this.openKeys)
    }
  }

  navToPath(path: string) {
    if (!path) return
    this.$router.push(path)
  }

  /**
   * @method 渲染菜单
   * @todo 根据给出的数据渲染出菜单
   * @return   { JSX }  JSX
   */
  renderMenuList(menuItem: SidebarOption) {
    // 有子菜单渲染
    if (menuItem?.children) {
      const childList = menuItem.children.map((item) => (
        <a-menu-item key={item.key} onClick={this.navToPath.bind(null, item.routePath)}>
          {item.title}
        </a-menu-item>
      ))
      return (
        <a-sub-menu key={menuItem.key}>
          <span slot='title'>
            <a-icon type={menuItem.icon} />
            <span>{menuItem.title}</span>
          </span>
          {childList}
        </a-sub-menu>
      )
    }
    // 无子菜单的渲染
    return (
      <a-menu-item key={menuItem.key} onClick={this.navToPath.bind(null, menuItem.routePath)}>
        <a-icon type={menuItem.icon} />
        <span>{menuItem.title}</span>
      </a-menu-item>
    )
  }

  render() {
    const menuList = this.MenuList.map((item) => this.renderMenuList(item))
    return (
      <a-menu
        theme='dark'
        mode='inline'
        openKeys={this.openKeys}
        defaultSelectedKeys={this.currentKey}
        onOpenChange={this.onOpenChange}
      >
        {menuList}
      </a-menu>
    )
  }
}
