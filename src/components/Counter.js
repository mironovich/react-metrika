import React, { useState, useEffect } from 'react'
// import Autosuggest from 'react-autosuggest'

const Counter = props => {
  const [counters, setCounters] = useState([])
  const [counter, setCounter] = useState('')

  useEffect(async () => {
    const counters = await props.getCounters()
    setCounters(counters)
    const counter = counters[0].id
    setCounter(counter)
    props.updateCounter(counter)
  }, [])

  const handleCounterChange = event => {
    const counter = event.target.value
    setCounter(counter)
    props.updateCounter(counter)
  }

  return (
    <>
      {console.log(`DEBUG: RENDERING COUNTER - ${counter}`)}
      <form>
        <select value={counter} onChange={handleCounterChange}>
          {counters.map(counter => (
            <option key={counter.id} value={counter.id}>
              {counter.name} ({counter.id})
            </option>
          ))}
        </select>
      </form>
    </>
  )
}

export default Counter
