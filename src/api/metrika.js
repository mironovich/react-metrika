// const config = require('../constants/.config.json')
require('isomorphic-fetch')

export default function Metrika(proxy = '') {
  let token,
    counters = []

  this.authUrl =
    'https://oauth.yandex.ru/authorize?' +
    'response_type=token' +
    '&client_id=' +
    process.env.REACT_APP_ID +
    '&display=popup'

  this.setToken = () => {
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

  function removeHash() {
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }

  this.getToken = () => {
    return this.token || this.setToken()
  }

  this.getCounters = async () => {
    console.log(`Account token: ${this.token}`)
    const response = await fetch(
      'https://burger-cors.herokuapp.com/https://api-metrika.yandex.ru/management/v1/counters?oauth_token=' +
        this.token
    )
    const data = await response.json()
    // console.log(data)
    this.counters = data.counters
    return this.counters
  }
}
