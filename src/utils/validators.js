/* 
    验证手机号码 
*/

/*let flagMobile = false;
let flagEmail = false;*/
// let flagBank = false;

export async function validatemobile(rule, value, callback) {
  if (!value) callback(new Error('请输入账号'))
  let rexPhone = /^1[3456789]\d{9}$/
  if (!rexPhone.test(value)) {
    callback(new Error('请输入正确格式的手机'))
    return false
  } else {
    // if (!flagMobile) {
    let res = await this.$Network.LoginService.validatemobile({
      mobile: value
    })
    if (!res) {
      callback('手机号已存在')
      return false
    }
    // flagMobile = true;
    // }
  }
}
/* 
    验证邮箱
*/
export async function validateMail(rule, value, callback) {
  let regMail = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if (!regMail.test(value)) {
    callback(new Error('请输入正确格式的邮箱'))
    return false
  }
  // if (!flagEmail) {
  let res = await this.$Network.LoginService.validatemobile({
    mobile: value
  })
  if (!res) {
    callback(new Error('邮箱已存在'))
  }
  // flagEmail = true;
  // }
}

/* 
    验证密码格式
*/

export function validatePasswordConfirm(rule, value, callback) {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== this.formRegister.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

/* 
    验证密码是否一致
*/
export function validatePassword(rule, value, callback) {
  if (value.length < 6 || value.length > 18) {
    callback(new Error('请输入6-18位的密码'))
  } else {
    if (this.formRegister.cpassword !== '') {
      this.$refs.formRegister.validateField('cpassword')
    }
    callback()
  }
}

// 银行卡验证

export async function validateBank(rule, value, callback) {
  console.log('-------------------')
  // if (!flagBank) {
  let res = await this.$Network.CtcService.searchBankName({
    bank: this.addBankFrom.bankNo,
    name: this.addBankFrom.userName
  })
  if (res) {
    this.addBankFrom.bankName = res.data
    // flagBank = true;
  } else {
    callback(new Error('不一致'))
  }
  // }
}
//验证提币数量是否在允许区间内

export function validateAmount(rule, value, callback) {
  if (value < this.balance.cashMin) {
    callback(new Error(`提币数量不能少于${this.balance.cashMin}`))
  } else if (value > this.balance.cashMax) {
    callback(new Error(`提币数量不能大于${this.balance.cashMax}`))
  } else {
    callback()
  }
}
