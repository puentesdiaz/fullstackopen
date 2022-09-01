import React, {useState} from 'react';
import './App.css';

function App(props) {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {props.anecdotes[selected]}
      <p>
        <button onClick={()=>{setSelected(1+selected)}}>next anecdotes</button>
      </p>
    </div>
  )
}

export default App;
