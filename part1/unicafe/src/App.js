import React, { useState } from 'react'
import './App.css';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setG = () => { setGood(1+good)}
  const setN = () => { setNeutral(1+neutral)}
  const setB = () => { setBad(1+bad)}

  return (
    <div>
      <Header setGood={setG} setNeutral={setN} setBad={setB}/>
      <Stats good={good}  neutral={neutral}  bad={bad} />
    </div>
  )
}

const Header = ({ setGood, setNeutral, setBad }) => {

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={"Good"} setF={setGood}/>
      <Button text={"Neutral"} setF={setNeutral}/>
      <Button text={"Bad"} setF={setBad}/>
    </>
  )

}

const Stats = ({ good, neutral, bad }) => {

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </>
  )

}




const Button = ({ text, setF }) => {

  return (
    <>
      <button onClick={() => { setF()}}>
        {text}
      </button>
    </>
  )

}
export default App;
