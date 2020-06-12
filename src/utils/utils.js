import QRCode from 'qrcode'
import * as clipboard from 'clipboard-polyfill'
import vm from '@/main'
import utfx from 'utfx'
import { mapValues } from 'lodash'
import txHexDecoder from 'transaction-hex-decoder'
import BN from 'bignumber.js'

/**
 * 数字转换为标准16进制
 *
 * @param {*} num
 * @returns
 */
export const toHex = function(num) {
  let res = BN(num).toString(16)
  if (res.length % 2 !== 0) res = `0${res}`
  return res
}

/**
 * 解码BTC交易源数据
 *
 * @param {*} rawTx 源数据
 * @returns
 */
export const decodeBtcRawTx = rawTx => {
  const tx = txHexDecoder.decodeBtcRawTx(rawTx)
  /*转换为硬件钱包需要的结构*/
  return tx
}

/**
 * 解码ETH交易源数据
 *
 * @param {*} rawTx 源数据
 * @returns
 */
export const decodeEthRawTx = rawTx => {
  return txHexDecoder.decodeEthRawTx(rawTx)
}

/**
 * 生成二维码
 *
 * @param {*} selector canvas对象选择器
 * @param {*} url 二维码地址
 * @param {*} size 二维码大小
 * @param {*} margin 边距
 * @returns
 */
export const createdQrCode = (selector, url, size, margin = 4) => {
  if (!url) return console.log('二维码地址不正确')
  let element = document.querySelector(selector)
  QRCode.toCanvas(element, url, { width: size, height: size, margin: margin }, error => {
    if (error) console.log(error)
  })
}

/**
 * 创建URL
 *
 * @param {*} file
 */
export const getObjectURL = file => {
  let url = null
  // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
  if (window.createObjectURL != undefined) {
    // basic
    url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

/**
 * 复制文本
 *
 * @param {*} text
 */
export const copyText = async (text, message = '复制成功') => {
  await clipboard.writeText(text)
  vm.$message({
    message: message,
    type: 'success'
  })
}

export const formatNumberLen = (val, len = 2) => {
  if (!val || isNaN(parseFloat(val))) return val
  if (typeof val === 'number') {
    val = val.toString()
  }

  let vals = val.split('.')

  if (!vals[1] || vals[1].length < 1 || vals[1].length < len) return val

  vals[1] = vals[1].substring(0, len)
  return vals[0] + '.' + vals[1]
}

export const purifyNumber = value => {
  //修复第一个字符是小数点 的情况.
  if (value != '' && value.substr(0, 1) == '.') {
    value = ''
  }
  value = value.replace(/[^\d.]/g, '') //清除“数字”和“.”以外的字符
  value = value.replace(/\.{2,}/g, '.') //只保留第一个. 清除多余的
  value = value
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
  if (value.indexOf('.') < 0 && value != '') {
    //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    if (value.substr(0, 1) == '0' && value.length >= 2) {
      value = value.substr(1, value.length)
    }
  }
  return value
}
/**
 * 是不是数字（正负整数、小数）
 * */
export const isMathNumber = val => {
  const reg = /^(-?\d+)(\.\d+)?$/
  return reg.test(val)
}

/**
 * 将非数字赋值为0
 * */
export const toMathNumber = val => {
  return isMathNumber(val) ? val : 0
}

export const isNumberKey = keyCode => {
  //是否为数字
  return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)
}
export const isDotKey = keyCode => {
  //是否是小数点
  return keyCode == 110 || keyCode == 190
}
export const isDeleteKey = keyCode => {
  //是否是删除
  return keyCode == 46 || keyCode == 8
}
export const isArrowKey = keyCode => {
  //是否是方向键
  return keyCode == 37 || keyCode == 39
}
export const isTabKey = keyCode => {
  //是否是tab键
  return keyCode == 9
}
export const isEnterKey = keyCode => {
  //是否是enter键
  return keyCode == 13 || keyCode == 108
}
export const isShiftEnter = (keyCode, shiftKey) => {
  //是否是shift+enter键
  return shiftKey && (keyCode == 13 || keyCode == 108)
}
export const isCtrlC = (keyCode, ctrlKey) => {
  //是否是复制
  return ctrlKey && keyCode == 67
}
export const isCtrlV = (keyCode, ctrlKey) => {
  //是否是粘贴
  return ctrlKey && keyCode == 86
}
export const isDoubleZero = (keyCode, cursorStart, cursorEnd, value) => {
  //是否会形成00开头的数字
  return (
    (keyCode == 48 || keyCode == 96) &&
    (cursorStart == 0 || cursorStart == 1) &&
    (cursorStart == cursorEnd || (cursorStart == 1 && cursorEnd > cursorStart)) &&
    value[0] == 0
  )
}

/**
 * 向挂单列表添加空数据
 * @param {*} list 列表
 */
export const fillList = (list, location = 'tail') => {
  /* 挂单最低显示条数 20 */
  const tagetLenth = 20
  const dLen = tagetLenth - list.length
  if (list.length >= tagetLenth) {
    return list
  }
  let defautObject = {
    price: '---',
    quantity: '---',
    totalPrice: '---'
  }
  if (location == 'head') {
    list.unshift(...new Array(dLen).fill(defautObject))
  }
  if (location == 'tail') {
    list.push(...new Array(dLen).fill(defautObject))
  }
  return list
}
export const mapModule = (moduleName, module) => {
  /**
   * 通过模块名从模块内获取模块数据
   * @param {*} moduleName 模块名称
   * @param {*} module 模块
   */
  let nameStr = `${moduleName}/`
  let nameLen = moduleName.length + 1
  let newModule = {}
  for (let key in module) {
    if (key.includes(nameStr)) {
      let newKey = key.substring(nameLen)
      newModule[newKey] = module[key]
    }
  }
  return newModule
}

export const mapModuleTypes = (types, moduleName) => {
  /**
   * 通过模块内的所有mutation常量
   * @param {*} moduleName 模块名称
   * @param {*} module 模块
   */
  return mapValues(types, item => {
    return `${moduleName}/${item}`
  })
}

export const replaceHtmlSymbol = html => {
  if (html == null) {
    return ''
  }
  return html
    .replace(/</gm, '&lt;')
    .replace(/>/gm, '&gt;')
    .replace(/"/gm, '&quot;')
    .replace(/(\r\n|\r|\n)/g, '')
}
// 获取粘贴的纯文本
export const getPasteText = e => {
  const clipboardData =
    e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData)
  let pasteText
  if (clipboardData == null) {
    pasteText = window.clipboardData && window.clipboardData.getData('text')
  } else {
    pasteText = clipboardData.getData('text/plain')
  }

  return replaceHtmlSymbol(pasteText)
}
//将string（utf-16）转为二进制数据流
export const parseStrToByte = str => {
  if (!str) return
  let jsonStr = JSON.stringify(str)
  let strCodes = utfx.stringSource(jsonStr)
  let length = utfx.calculateUTF16asUTF8(strCodes)[1]
  let buffer = new ArrayBuffer(length) // 初始化长度为UTF8编码后字符串长度+4个Byte的二进制缓冲区
  let view = new DataView(buffer)
  let offset = 0
  view.setUint32(0, length) // 将长度放置在字符串的头部
  utfx.encodeUTF16toUTF8(utfx.stringSource(jsonStr), function(b) {
    view.setUint8(offset++, b)
  })
  return view
}
export const parseByteToStr = buffer => {
  let view = new DataView(buffer)
  let Strlength = view.byteLength
  let offset = 0
  let result = [] // Unicode编码字符
  let end = offset + Strlength
  utfx.decodeUTF8toUTF16(
    function() {
      return offset < end ? view.getUint8(offset++) : null // 返回null时会退出此转换函数
    },
    char => {
      result.push(char)
    }
  )
  let strResult = result.reduce((prev, next) => {
    return prev + String.fromCharCode(next)
  }, '')
  return strResult
}

/**
 * 缓动(Tween)
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 */
export const Tween = {
  Linear: function(t, b, c, d) {
    return (c * t) / d + b
  },
  Quad: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t + b
    },
    easeOut: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b
      return (-c / 2) * (--t * (t - 2) - 1) + b
    }
  },
  Cubic: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
      return (c / 2) * ((t -= 2) * t * t + 2) + b
    }
  },
  Quart: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
    }
  },
  Quint: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
    }
  },
  Sine: {
    easeIn: function(t, b, c, d) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
    },
    easeOut: function(t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b
    },
    easeInOut: function(t, b, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
    }
  },
  Expo: {
    easeIn: function(t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOut: function(t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if (t == 0) return b
      if (t == d) return b + c
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
    }
  },
  Circ: {
    easeIn: function(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOut: function(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    }
  },
  Elastic: {
    easeIn: function(t, b, c, d, a, p) {
      var s
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (typeof p == 'undefined') p = d * 0.3
      if (!a || a < Math.abs(c)) {
        s = p / 4
        a = c
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      return (
        -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
        b
      )
    },
    easeOut: function(t, b, c, d, a, p) {
      var s
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (typeof p == 'undefined') p = d * 0.3
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      return (
        a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
      )
    },
    easeInOut: function(t, b, c, d, a, p) {
      var s
      if (t == 0) return b
      if ((t /= d / 2) == 2) return b + c
      if (typeof p == 'undefined') p = d * (0.3 * 1.5)
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      if (t < 1)
        return (
          -0.5 *
            (a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
          b
        )
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
          0.5 +
        c +
        b
      )
    }
  },
  Back: {
    easeIn: function(t, b, c, d, s) {
      if (typeof s == 'undefined') s = 1.70158
      return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOut: function(t, b, c, d, s) {
      if (typeof s == 'undefined') s = 1.70158
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOut: function(t, b, c, d, s) {
      if (typeof s == 'undefined') s = 1.70158
      if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    }
  },
  Bounce: {
    easeIn: function(t, b, c, d) {
      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b
    },
    easeOut: function(t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
      }
    },
    easeInOut: function(t, b, c, d) {
      if (t < d / 2) {
        return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b
      } else {
        return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
      }
    }
  }
}

/*数字前补0*/
export const prefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n)
}
