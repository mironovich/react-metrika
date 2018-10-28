import React, { useState, useEffect } from 'react'
import './App.css'
import Metrika from './api/metrika'
import Counter from './components/Counter'
import Auth from './components/Auth'

const App = () => {
  let ym = new Metrika()

  const [token] = useState(ym.getToken())

  return <div>{!token ? <Auth {...ym} /> : <Counter {...ym} />}</div>
}

export default App
