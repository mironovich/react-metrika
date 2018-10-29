import React, { useState, useEffect } from 'react'
// import Autosuggest from 'react-autosuggest'

const Counter = props => {
  const [counters, setCounters] = useState([])

  useEffect(async () => {
    const counters = await props.getCounters()
    setCounters(counters)
    props.update(counters[0].id)
  }, [])

  return (
    <>
      {console.log(`DEBUG: RENDERING`)}
      <form>
        <select value={props.counter} onChange={props.update}>
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
