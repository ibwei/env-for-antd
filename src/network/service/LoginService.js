import Vue from 'vue'

class LoginService extends Vue {
  login(data) {
    const userData = JSON.parse(JSON.stringify(data))
    if (userData.mobile) {
      userData.username = userData.mobile
      delete userData.mobile
    }
    return this.$post('login', userData)
  }

  passwordFindBack(data) {
    return this.$post('findPassword', data)
  }

  register(data) {
    const userData = JSON.parse(JSON.stringify(data))
    delete userData.cpassword
    if (userData.email) {
      userData.mobile = userData.email
      delete userData.email
    }
    return this.$post('register', userData)
  }

  validatemobile(mobile) {
    return this.$post('checkRegister', mobile)
  }

  sendCode(mobile, noteType) {
    return this.$post('sendNote', {
      mobile,
      noteType
    })
  }

  sendInsideCode(mobile, noteType) {
    return this.$post('sendInsideCode', {
      mobile,
      noteType
    })
  }
}

export default new LoginService()
