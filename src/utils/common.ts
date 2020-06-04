/* eslint-disable */
// @ts-nocheck
// encode html tag
export function utc2Beijing(date) {
  let timestamp = new Date(Date.parse(date))
  timestamp = timestamp.getTime()
  timestamp = timestamp / 1000

  // 增加8个小时，北京时间比utc时间多八个时区
  timestamp = timestamp + 8 * 60 * 60

  // 时间戳转为时间
  const beijingDatetime = new Date(parseInt(timestamp) * 1000)

  const year = beijingDatetime.getFullYear()
  let month = beijingDatetime.getMonth() + 1
  if (month < 10) {
    month = `0${month}`
  }
  let day = beijingDatetime.getDate()
  if (day < 10) {
    day = `0${day}`
  }
  let hour = beijingDatetime.getHours()
  if (hour < 10) {
    hour = `0${hour}`
  }
  let minute = beijingDatetime.getMinutes()
  if (minute < 10) {
    minute = `0${minute}`
  }
  let second = beijingDatetime.getSeconds()
  if (second < 10) {
    second = `0${second}`
  }

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export function copyText(test) {
  const tag = document.createElement('input')
  tag.setAttribute('id', 'cp_input')
  tag.value = test
  document.getElementsByTagName('body')[0].appendChild(tag)
  document.getElementById('cp_input').select()
  document.execCommand('copy')
  document.getElementById('cp_input').remove()
}

export function getMousePos(event) {
  var e = event || window.event
  var x = e.clientX
  var y = e.clientY
  return { x: x, y: y }
}
export function HtmlEncode(text) {
  return text
    .replace(/&/g, '&')
    .replace(/\"/g, '"')
    .replace(/</g, '<')
    .replace(/>/g, '>')
}

// add bookmark
export function addFavorite(sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle)
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, '')
    } catch (e) {
      alert('if failed,please use CTRL + D')
    }
  }
}
// back to top of window
export function backTop(btnId) {
  const btn = document.getElementById(btnId)
  const d = document.documentElement
  const b = document.body
  window.onscroll = set
  btn.style.display = 'none'
  btn.onclick = function() {
    btn.style.display = 'none'
    window.onscroll = null
    this.timer = setInterval(function() {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1)
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1)
      if (d.scrollTop + b.scrollTop == 0) clearInterval(btn.timer, (window.onscroll = set))
    }, 10)
  }
  function set() {
    btn.style.display = d.scrollTop + b.scrollTop > 100 ? 'block' : 'none'
  }
}
// base64 encode
export function base64_decode(data) {
  const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let o1
  let o2
  let o3
  let h1
  let h2
  let h3
  let h4
  let bits
  let i = 0
  let ac = 0
  let dec = ''
  const tmp_arr = []
  if (!data) {
    return data
  }
  data += ''
  do {
    h1 = b64.indexOf(data.charAt(i++))
    h2 = b64.indexOf(data.charAt(i++))
    h3 = b64.indexOf(data.charAt(i++))
    h4 = b64.indexOf(data.charAt(i++))
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4
    o1 = (bits >> 16) & 0xff
    o2 = (bits >> 8) & 0xff
    o3 = bits & 0xff
    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1)
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2)
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3)
    }
  } while (i < data.length)
  dec = tmp_arr.join('')
  dec = utf8_decode(dec)
  return dec
}

// is valid keypress
export function checkKey(iKey) {
  if (iKey == 32 || iKey == 229) {
    return true
  } /* space和exception */
  if (iKey > 47 && iKey < 58) {
    return true
  } /* number */
  if (iKey > 64 && iKey < 91) {
    return true
  } /* string */
  if (iKey > 95 && iKey < 108) {
    return true
  } /* num keyboard 1 */
  if (iKey > 108 && iKey < 112) {
    return true
  } /* num keyboard 2 */
  if (iKey > 185 && iKey < 193) {
    return true
  } /* punctuation 1 */
  if (iKey > 218 && iKey < 223) {
    return true
  } /* num keyboard 2 */
  return false
}
// cross browser to delete events
export function delEvt(obj, evt, fn) {
  if (!obj) {
    return
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false)
  } else if (oTarget.attachEvent) {
    obj.attachEvent('on' + evt, fn)
  } else {
    obj['on' + evt] = fn
  }
}

// get cookie value
export function getCookie(name) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}

// get page height
export function getPageHeight() {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode == 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}

// get page view height
export function getPageViewHeight() {
  const d = document
  const a = d.compatMode == 'BackCompat' ? d.body : d.documentElement
  return a.clientHeight
}
// get page view width
export function getPageViewWidth() {
  const d = document
  const a = d.compatMode == 'BackCompat' ? d.body : d.documentElement
  return a.clientWidth
}
// get page width
export function getPageWidth() {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode == 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}

export function getScreenWidth() {
  let smallerSide = Math.min(screen.width, screen.height)
  const fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport
  const fixViewPortsExperimentRunning = fixViewPortsExperiment && fixViewPortsExperiment.toLowerCase() === 'new'
  if (fixViewPortsExperiment) {
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
      smallerSide = smallerSide / window.devicePixelRatio
    }
  }
  return smallerSide
}

export function getViewSize() {
  const de = document.documentElement
  const db = document.body
  const viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth
  const viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight
  return [viewW, viewH]
}

export function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

export function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}

export function isDigit(value) {
  const patrn = /^[0-9]*$/
  if (patrn.exec(value) == null || value == '') {
    return false
  } else {
    return true
  }
}

export const isIphonex = () => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ]
  // h5
  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent)
    if (!isIOS) return false
    const { devicePixelRatio, screen } = window
    const { width, height } = screen
    return xSeriesConfig.some(item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height)
  }
  return false
}

export function isMobile() {
  if (typeof this._isMobile === 'boolean') {
    return this._isMobile
  }
  let screenWidth = this.getScreenWidth()
  const fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport
  if (!fixViewPortsExperiment) {
    if (!this.isAppleMobileDevice()) {
      screenWidth = screenWidth / window.devicePixelRatio
    }
  }
  const isMobileScreenSize = screenWidth < 600
  this._isMobile = isMobileScreenSize && this.isTouchScreen()
  return this._isMobile
}

export function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())
}

export function isMouseOut(e, handler) {
  if (e.type !== 'mouseout') {
    return false
  }
  let reltg = e.relatedTarget ? e.relatedTarget : e.type === 'mouseout' ? e.toElement : e.fromElement
  while (reltg && reltg !== handler) {
    reltg = reltg.parentNode
  }
  return reltg !== handler
}

export function isTouchScreen() {
  return 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)
}

export function isViewportOpen() {
  return !!document.getElementById('wixMobileViewport')
}

export function getOffset(e) {
  const target = e.target
  let eventCoord
  let pageCoord
  let offsetCoord
  pageCoord = getPageCoord(target)
  eventCoord = {
    X: window.pageXOffset + e.clientX,
    Y: window.pageYOffset + e.clientY
  }

  offsetCoord = {
    X: eventCoord.X - pageCoord.X,
    Y: eventCoord.Y - pageCoord.Y
  }
  return offsetCoord
}

export function getPageCoord(element) {
  const coord = { X: 0, Y: 0 }
  while (element) {
    coord.X += element.offsetLeft
    coord.Y += element.offsetTop
    element = element.offsetParent
  }
  return coord
}

export function setCookie(name, value, Hours) {
  const d = new Date()
  const offset = 8
  const utc = d.getTime() + d.getTimezoneOffset() * 60000
  const nd = utc + 3600000 * offset
  const exp = new Date(nd)
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString() + ';domain=360doc.com;'
}

export function uniqueId(): number {
  const a: any = Math.random
  const b: any = parseInt
  return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
}

export function utf8_decode(str_data) {
  const tmp_arr = []
  let i = 0
  let ac = 0
  let c1 = 0
  let c2 = 0
  let c3 = 0
  str_data += ''
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i)
    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1)
      i++
    } else if (c1 > 191 && c1 < 224) {
      c2 = str_data.charCodeAt(i + 1)
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63))
      i += 2
    } else {
      c2 = str_data.charCodeAt(i + 1)
      c3 = str_data.charCodeAt(i + 2)
      tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
      i += 3
    }
  }
  return tmp_arr.join('')
}
