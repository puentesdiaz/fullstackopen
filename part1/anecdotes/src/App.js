import React, {useState} from 'react';
import './App.css';

function App(props) {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {props.anecdotes[selected]}
    </div>
  )
}

export default App;
