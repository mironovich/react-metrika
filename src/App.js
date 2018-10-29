// TODO: add custom hooks for state update

import React, { useState } from 'react'
import './App.css'
import Metrika from './api/metrika'
import Counter from './components/Counter'
import Auth from './components/Auth'
import Request from './components/Request'

const App = () => {
  let ym = new Metrika()

  const [token] = useState(ym.getToken())

  const updateCounter = counter => {
    ym.counter = counter
  }

  return (
    <div>
      {console.log(`DEBUG: RENDERING APP - ${ym.counter}`)}
      {token ? (
        <Counter {...ym} updateCounter={updateCounter} />
      ) : (
        <Auth authUrl={ym.url.auth} />
      )}
      {ym.counter && <Request />}
    </div>
  )
}

export default App
