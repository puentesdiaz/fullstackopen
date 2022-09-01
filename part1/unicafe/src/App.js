import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setG = () => { 
    setGood(1+good)
    setStats()
  }
  const setN = () => { 
    setNeutral(1+neutral)
    setStats()
  }
  const setB = () => { 
    setBad(1+bad)
    setStats()
  }  
  const setStats = () => { 
    setAll(1+all) 
  }

  useEffect(() => {
    if (all>0) {
      setAverage(((1*good)+(0*neutral)+(-1*bad))/all)
      setPositive(100*(good/all))
    }    
  },[all])

  return (
    <div>
      <Header setGood={setG} setNeutral={setN} setBad={setB}/>
      <Stats good={good}  neutral={neutral}  bad={bad} all={all} average={average} positive={positive} />
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

const Stats = ({ good, neutral, bad, all, average, positive }) => {

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
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
