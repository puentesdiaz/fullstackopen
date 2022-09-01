import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [selected, setSelected] = useState(0)
  const initialPoints = [ 0, 0, 0, 0, 0, 0 ];
  const [points, setPoints] = useState([ ...initialPoints ])

  const handleNextSelected = () => {
    if (props.anecdotes.length - 1 === selected) {
      setSelected(0)
    } else {
      setSelected(1 + selected)
    }
  }

  const handleVote = () => {
    const n = [ ...points ]
    n[selected] += 1;
    setPoints(n)
  } 
  
  return (
    <div>
      <h1>Anecdote of the dar</h1>
      {props.anecdotes[selected]}
      <p>
        has {points[selected]} votes.
      </p>
      
      <p>
        <button onClick={() => { handleVote() }}>vote</button>
        <button onClick={() => { handleNextSelected() }}>next anecdotes</button>
      </p>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[points.indexOf(Math.max(...points))]}
      <p>
        has {points[points.indexOf(Math.max(...points))]} votes.
      </p> 
    </div>
  )
}

export default App;
