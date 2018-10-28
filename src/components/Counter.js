import React, { useState, useEffect } from 'react'
import Autosuggest from 'react-autosuggest'
import App from '../App'

export default function Counter(props) {
  const [counters, setCounters] = useState([])
  const [counter, setCounter] = useState('')

  useEffect(
    async () => {
      if (counters && !counters.length) {
        setCounters( await props.ym.getCounters())
      }
    },
    [props.ym.counters]
  )

  return (
    <div>
      {console.log('rendering')}
      {console.log(counters)}
    </div>
  )
}
