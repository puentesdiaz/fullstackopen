import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({parts}) => {

  const [part1, part2, part3] = parts;
  return (
    <>    
      <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </>
    
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
const Total = ({parts}) => {
  const [part1, part2, part3] = parts;

  return (
    <>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
} 


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
