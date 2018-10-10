// const config = require('../constants/.config.json')
require('isomorphic-fetch')
// console.log(process.env)

class Metrika {
  auth =
    'https://oauth.yandex.ru/authorize?' +
    'response_type=token' +
    '&client_id=' +
    process.env.REACT_APP_ID +
    // [& device_id=<идентификатор устройства>]
    // [& device_name=<имя устройства>]
    // [& redirect_uri=<адрес перенаправления>]
    // [& login_hint=<имя пользователя или электронный адрес>]
    // [& scope=<запрашиваемые необходимые права>]
    // [& optional_scope=<запрашиваемые опциональные права>]
    // [& force_confirm=yes]
    // [& state=<произвольная строка>]
    '&display=popup'

  getData(token) {
    let request =
      'https://api-metrika.yandex.ru/management/v1/counter/41649664/logrequests/evaluate?date1=2016%2D01%2D01&date2=2016%2D01%2D31&fields=ym%3Apv%3AdateTime%2Cym%3Apv%3Areferer&source=hits&oauth_token=' +
      token
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    })

    request =
      'http://api-metrika.yandex.ru/stat/traffic/summary.json?id=41649664&date1=20180505&date2=20180505&oauth_token=' +
      token

    fetch(request, {
      // method: 'POST',
      // credentials: 'include',
      // mode: 'no-cors',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
}

export default Metrika
