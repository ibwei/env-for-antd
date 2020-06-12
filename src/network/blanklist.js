const url = ['USERCENTER/center/front/pass/checkRegister']

let list = url.map(item => `${process.env.VUE_APP_API_URL}bfapi/${item}`)

const set = new Set(list)

export function isBank(url) {
  return set.has(url)
}
