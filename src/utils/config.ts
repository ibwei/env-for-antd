import { LanguageOption, SidebarOption } from '@/interface'

const config = {
  name: '迪富借贷平台',
  footerText: `迪富借贷平台  ${new Date().getFullYear()} © 版权所有`,
  icon: '/favicon.ico',
  // 全屏页面
  fullPages: ['/user/login', '/404', '/401']
}

export const ColorArray = ['pink', 'red', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']

export const LanguageList: Array<LanguageOption> = [
  {
    name: '中文简体',
    value: 'zhCN'
  },
  {
    name: 'English',
    value: 'en'
  }
]
export const SidebarList: Array<SidebarOption> = [
  {
    key: '0',
    title: '资金借入',
    icon: 'dashboard',
    children: [
      {
        key: '0-1',
        title: '当前发布',
        routePath: '/borrow/release'
      },
      {
        key: '0-2',
        title: '当前借入',
        routePath: '/borrow/current'
      },
      {
        key: '0-3',
        title: '历史借入',
        routePath: '/borrow/history'
      },
      {
        key: '0-4',
        title: '补仓记录'
      }
    ]
  },
  {
    key: '1',
    title: ' 闲钱借出',
    icon: 'dollar',
    children: [
      {
        key: '1-0',
        title: '当前借出',
        routePath: '/lend/current'
      },
      {
        key: '1-1',
        title: '历史借出',
        routePath: '/lend/history'
      }
    ]
  },
  {
    key: '2',
    title: '资产管理',
    icon: 'wallet',
    children: [
      {
        key: '2-0',
        title: '充币记录'
      },
      {
        key: '2-1',
        title: '提币记录'
      },
      {
        key: '2-2',
        title: '成交记录'
      }
    ]
  },
  {
    key: '3',
    title: '个人中心',
    icon: 'user',
    children: [
      {
        key: '3-0',
        title: '基本信息'
      },
      {
        key: '3-1',
        title: ' 安全设置'
      },
      {
        key: '3-2',
        title: '支付设置'
      },
      {
        key: '3-3',
        title: '迪富 U 盾'
      },
      {
        key: '3-4',
        title: '绑定公钥'
      }
    ]
  }
]

export default config
