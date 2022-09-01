import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [selected, setSelected] = useState(0)
  const initialPoints = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const [points, setPoints] = useState({ ...initialPoints })

  const handleNextSelected = () => {
    if (props.anecdotes.length-1===selected) {
      setSelected(0) 
    } else {
      setSelected(1 + selected) 
    }
  }
  
  const handleVote = () => {
    const n = {...points}
    n[selected] += 1;
    setPoints(n)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>
        <button onClick={() => {handleVote()}}>vote</button>
        <button onClick={()=>{handleNextSelected()}}>next anecdotes</button>
      </p>
      <p>
        {JSON.stringify(points)}
      </p>
    </div>
  )
}

export default App;
