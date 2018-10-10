require('isomorphic-fetch')

var checkURL =
  'https://api-metrika.yandex.ru/management/v1/counter/41649664/logrequests/evaluate?date1=2016%2D01%2D01&date2=2016%2D01%2D31&fields=ym%3Apv%3AdateTime%2Cym%3Apv%3Areferer&source=hits&oauth_token=AQAAAAAAltmcAAU5eiaXiDteZEe0nNxe1Tb_7lc&callback=onMetrikaResponse'

var createURL =
  'https://api-metrika.yandex.ru/management/v1/counter/41649664/logrequests?date1=2018%2D01%2D01&date2=2018%2D01%2D31&fields=ym%3Apv%3AdateTime%2Cym%3Apv%3Areferer&source=hits&oauth_token=AQAAAAAAltmcAAU5eiaXiDteZEe0nNxe1Tb_7lc'

var getURL =
  'https://api-metrika.yandex.ru/management/v1/counter/41649664/logrequest/1512220/part/0/download?oauth_token=AQAAAAAAltmcAAU5eiaXiDteZEe0nNxe1Tb_7lc'

var addScript = function(src) {
  // try {
    var elem = document.createElement('script')
    elem.src = src
    // elem.type = 'application/json'
    document.head.appendChild(elem)
  // } catch (e) {}
}

var onMetrikaResponse = function(response) {
  console.log(response)
}

fetch(getURL, { method: 'GET' })
  //.then(response => response.json())
  .then(data => console.log(data))

  console.log(0.1+0.2)
