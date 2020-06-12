import JSEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'
import { random } from 'lodash'
/* eslint-disable */

const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

const Rsa = new JSEncrypt()

Rsa.setPublicKey(`
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDn/QnUfkKkQpG++6YDUYo8qc0mrcRb
Rsmokp3EJZJrwIblldv6W2+yAIWkkel4GzsL+oklZReqZcG4F+ug3otc6IZa3fFMXuaD
zoDzicdOABe2s8igLjMcfhujI9MqYvkVVSyFWdVOLNAnzQJgkisnHKZGPQZcxnQAHxTO
Uco+LwIDAQAB
-----END PUBLIC KEY-----
`)

function encryption(params) {
  let key = ''

  for (let i = 0; i < 8; i++) {
    key += b64map.charAt(random(0, b64map.length - 1))
  }

  let ParseKey = CryptoJS.enc.Utf8.parse(key)

  let mode = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }

  let result = {}
  result.key = Rsa.encrypt(key)
  result.ciphertext = CryptoJS.DES.encrypt(
    JSON.stringify(params),
    ParseKey,
    mode
  ).toString()
  result.time = CryptoJS.DES.encrypt(
    new Date().getTime().toString(),
    ParseKey,
    mode
  ).toString()

  return result
}

// let key = CryptoJS.enc.Utf8.parse("HAHAHAHA");
// let ccc = CryptoJS.DES.encrypt("helloword", key, {
//   mode: CryptoJS.mode.ECB,
//   padding: CryptoJS.pad.Pkcs7
// });

// console.log(ccc.toString());
// console.log(ccc.toString(CryptoJS.enc.base64));

export default encryption

export { Rsa }
