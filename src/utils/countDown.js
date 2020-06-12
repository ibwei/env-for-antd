import { setStorage, getStorage, deleteStorage } from './storage'

class Countdown {
  timer = null
  constructor(time, ele, mark) {
    this.time = time
    this.ele = ele
    this.mark = mark
    this.originTime = time
    this.getRemainTime()
  }

  sendCode() {
    this.ele.setAttribute('disabled', 'disabled')
    setStorage(`remaintime-${this.mark}`, new Date().getTime())
    this.timer = setInterval(this.setTime.bind(this), 1000)
  }

  setTime() {
    this.time--
    if (this.time > 0) {
      this.ele.innerText = `${this.time}s后获取`
      setStorage(`time-${this.mark}`, this.time)
    } else {
      clearInterval(this.timer)
      this.timer = null
      this.ele.innerText = '获取验证码'
      this.ele.disabled = false
      this.time = this.originTime
      deleteStorage(`time-${this.mark}`)
    }
  }

  getRemainTime() {
    let now = new Date().getTime()
    if (getStorage(`remaintime-${this.mark}`)) {
      let oldTime = getStorage(`remaintime-${this.mark}`)
      let remaintime = parseInt((now - oldTime) / 1000)

      if (remaintime > this.originTime) {
        this.ele.innerText = `获取验证码`
      } else {
        if (getStorage(`time-${this.mark}`)) {
          let time = getStorage(`time-${this.mark}`)
          this.time = time - remaintime
          this.sendCode()
        }
      }
    }
  }

  stopCountDown() {
    this.time = 60
    this.ele.disabled = false
    this.timer = null
    this.ele.innerText = '获取验证码'
  }
}

export default Countdown
