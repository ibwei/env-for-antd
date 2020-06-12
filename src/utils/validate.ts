/**
 * 公用当表单验证正则
 */

// 验证身份证
export const isUserID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 验证密码
// export const isPass = /^.{6,18}$/
export const isPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/

// 手机号
export const isMobile = /^1[0-9]{10}$/

// 邮箱地址
export const isEmail = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/

// 短信验证码
export const isMobileCode = /^[0-9]{6}$/

// URL地址
export const isURL = /^http[s]?:\/\/.*/
