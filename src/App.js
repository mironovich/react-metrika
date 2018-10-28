import React, { useState, useEffect } from 'react'
import './App.css'
import Metrika from './api/metrika'
import Counter from './components/Counter'

export default function App() {
  let ym = new Metrika()

  const [token] = useState(ym.getToken())

  return (
    <div>
      {token ? <Counter ym={ym} /> : <a href={ym.authUrl}>Auth</a>}
      {console.log(ym.token)}
      {(window.location.hash = '')}
    </div>
  )
}
