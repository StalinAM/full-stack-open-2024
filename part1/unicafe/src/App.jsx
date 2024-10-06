import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  return (
    <>
      <h1>Unicafe</h1>
      <h2>give feedback</h2>
      <div>
        <Button name={'good'} setState={setGood} state={good} />
        <Button name={'neutral'} setState={setNeutral} state={neutral} />
        <Button name={'bad'} setState={setBad} state={bad} />
      </div>
      <h2>statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    </>
  )
}

export default App
