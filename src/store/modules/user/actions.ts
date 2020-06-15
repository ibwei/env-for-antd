import UserService from '@/network/service/UserService'
import Store from '@/store'
import Router from '@/router'
export default {
  updateUserInfo(context, userInfo) {
    return new Promise((resolve, reject) => {
      if (userInfo) {
        Store.__s('user.userInfo', userInfo)
        resolve(userInfo)
      } else {
        const userID = context.state.user.userInfo.id
        UserService.findCenterUserMain({ userId: userID })
          .then(result => {
            if (!result) return reject(new Error('0'))
            context.commit('updateUserInfo', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  },
  updateUserToken(state, infoToken) {
    Store.__s('user.refresh_token', infoToken.refresh_token)
    Store.__s('user.token', infoToken.access_token)
    Store.__s('user.userId', infoToken.userId)
  },
  logout: ({ state }) => {
    const { id } = state.userInfo
    if (id) {
      return new Promise(resolve => {
        UserService.logout(id).finally(() => {
          Store.__s('user.token', '')
          Store.__s('user.refresh_token', '')
          Store.__s('user.userId', '')
          Store.__s('user.userInfo', null)
          Store.__s('user.login', false)
          Router.push('/user/login')
          resolve()
        })
      })
    }
  }
}
