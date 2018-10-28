// const config = require('../constants/.config.json')
require('isomorphic-fetch')

export default function Metrika(proxy = '') {
  let token

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
    }
    else {
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
}
