import React, { useState, useEffect } from 'react'
import './App.css'
import Metrika from './api/metrika'

export default function App() {
  let ym = new Metrika()

  const [token] = useState(ym.getToken())

  return (
    <div>
      {token ? `Your token is ${token}` : <a href={ym.authUrl}>Auth</a>}
      {console.log(ym.token)}
      {window.location.hash = ''}
    </div>
  )
}
