import Market from './market.api'

const api = { Market }

const API = new Proxy(api, {
  get(target, propKey, receiver) {
    const sym = String(propKey)
    console.log(`getting ${sym}!`)
    return Reflect.get(target, propKey, receiver)
  }
})

export default API
