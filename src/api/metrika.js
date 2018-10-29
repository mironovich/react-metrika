// TODO: add proxy var
// TODO: add requests url lib

// const config = require('../constants/.config.json')
require('isomorphic-fetch')

export default function Metrika(proxy = '') {
  let token,
    counters = []

  this.counter = undefined

  this.url = {
    auth:
      'https://oauth.yandex.ru/authorize?' +
      'response_type=token' +
      '&client_id=' +
      process.env.REACT_APP_ID +
      '&display=popup' +
      '&redirect_uri=' +
      window.location.href,

    validate:
      proxy +
      'https://api-metrika.yandex.ru/management/v1/counter/41649664/logrequests/evaluate?date1=2016%2D01%2D01&date2=2016%2D01%2D31&fields=ym%3Apv%3AdateTime%2Cym%3Apv%3Areferer&source=hits&oauth_token=AQAAAAAAltmcAAU5eiaXiDteZEe0nNxe1Tb_7lc',
  }

  const setToken = () => {
    let t = document.URL.match(/#.*access_token=([a-zA-Z0-9_]+)&/)
    if (t) {
      removeHash()
      this.token = t[1]
      window.sessionStorage.setItem('token', this.token)
    } else {
      this.token = window.sessionStorage.getItem('token')
    }
    return this.token
  }

  const removeHash = () => {
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }
  this.setCounter = counter => {
    this.counter = counter
    return this.counter
  }

  this.getCounter = () => {
    return this.counter
  }

  this.getToken = () => {
    return this.token || setToken()
  }

  this.getCounters = async () => {
    const t = window.sessionStorage.getItem('counters')
    if (t) {
      this.counters = JSON.parse(t)
    } else {
      console.log(`DEBUG: REQUEST - COUNTERS`)
      const response = await fetch(
        'https://burger-cors.herokuapp.com/https://api-metrika.yandex.ru/management/v1/counters?oauth_token=' +
          this.token
      )
      const data = await response.json()

      this.counters = data.counters.map(counter => {
        return { id: counter.id, name: counter.name }
      })
      window.sessionStorage.setItem('counters', JSON.stringify(this.counters))
    }
    return this.counters
  }
}
