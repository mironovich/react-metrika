import React, { useState, useEffect } from 'react'
import './App.css'
import Metrika from './api/metrika'
import Counter from './components/Counter'
import Auth from './components/Auth'
import Request from './components/Request'

const App = () => {
  let ym = new Metrika()

  const [token] = useState(ym.getToken())
  const [counter, setCounter] = useState('')

  const updateCounter = counter => {
    setCounter(counter)
  }

  return (
    <div>
      {token ? (
        <Counter {...ym} update={updateCounter} counter={counter} />
      ) : (
        <Auth authUrl={ym.url.auth} />
      )}
      {counter && <Request />}
    </div>
  )
}

export default App
