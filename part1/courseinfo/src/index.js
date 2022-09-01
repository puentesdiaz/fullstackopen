import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const Header = (props) => {

  return ([
    <h1>{props.course}</h1>
  ])
}
const Content = (props) => {

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    [
      <Part part={part1} exercises={props.exercises1}/>,
      <Part part={part2} exercises={props.exercises2}/>,
      <Part part={part3} exercises={props.exercises3}/>
    ]
  )
}
const Part = (props) => {

  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
} 
const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
} 


const App = () => {
  const course = 'Half Stack application development'
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
