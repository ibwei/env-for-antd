// tsx 写法
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { LanguageList } from '../../../utils/config'
import { setLang } from '@/i18n/index'
import Store from '@/store'
import './index.less'

@Component
export default class Spin extends Vue {
  @Prop() collapsed!: boolean
  @Emit() changeFold() {
    console.log(this.collapsed)
    return this.$props.collapsed
  }

  get c_userInfo() {
    return Store.__s('user.userInfo')
  }

  get c_languageName() {
    return Store.__s('app.languageName')
  }

  @Emit()
  menuClick(params: { item: any; key: string; keyPath: string[] }): void {
    switch (params.key) {
      case '1':
        break
      case '2':
        this.$router.push('/user/update')
        break
      case '3':
        // 退出

        break
      default:
    }
  }

  // 切换语言的处理
  changeLangage(lang) {
    Store.__s('app.languageName', LanguageList[lang.key].name)
    setLang(LanguageList[lang.key].value)
  }

  render() {
    // 渲染语言列表
    const languageList = LanguageList.map((item, index) => (
      <a-menu-item key={index}>
        <a-badge status={item.value === Store.__s('app.language') ? 'success' : 'default'} text={item.name} />
        <a-menu-divider />
      </a-menu-item>
    ))
    return (
      <div class='topmenu-wrap'>
        <a-icon class='trigger' type={this.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.changeFold} />
        <ul class='header-menu'>
          <li class='user' style='width:20px;'>
            <a-icon style={{ fontSize: '18px' }} type='question-circle' />
          </li>
          <li class='user' style='width:20px;'>
            <a-badge count={0} class=''>
              <a-icon type='bell' style={{ fontSize: '18px' }} />
            </a-badge>
          </li>
          <li class='user' style='padding-right:0px;'>
            <a-dropdown>
              <span class='ant-dropdown-link'>
                <a-icon style={{ fontSize: '18px' }} type='global' />
                <span class='name' style='margin-left:5px;'>
                  {this.c_languageName}
                </span>
              </span>
              <a-menu slot='overlay' on-click={this.changeLangage}>
                {languageList}
              </a-menu>
            </a-dropdown>
          </li>
          <li class='user'>
            <a-dropdown>
              <span class='ant-dropdown-link'>
                <a-avatar src={this.c_userInfo ? this.c_userInfo : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />
                <span class='name'>{this.c_userInfo?.username ? this.c_userInfo.username : 'Yours'}</span>
              </span>
              <a-menu slot='overlay' on-click={this.menuClick}>
                <a-menu-item key='2'>修改密码</a-menu-item>
                <a-menu-divider />
                <a-menu-item key='3'>
                  <font color='red'>退出登录</font>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
        </ul>
      </div>
    )
  }
}
