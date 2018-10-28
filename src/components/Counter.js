import React, { useState, useEffect } from 'react'
import Autosuggest from 'react-autosuggest'
import App from '../App'

const Counter = (props) => {
  const [counters, setCounters] = useState([])

  useEffect(
    async () => {
      if (counters && !counters.length) {
        setCounters( await props.getCounters())
      }
    },
    [props.counters]
  )

  return (
    <>
      {console.log(counters)}
    </>
  )
}

export default Counter