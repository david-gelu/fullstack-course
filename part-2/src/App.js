import React from "react";
import Course from './components/part-2a/Course'
import PhoneBook from './components/part-2b/PhoneBook'
import Countries from "./components/part-2c/Countries";
import './index.css';

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Exercises 2.1.-2.5.</h3>
      <Course courses={courses} />
      <hr />
      <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Exercises 2.6.-2.10.</h3>
      <PhoneBook />
      <hr />
      <h3 style={{ padding: '0.25rem 0.5rem', background: 'lightblue', color: 'black', width: 'max-content' }}>Exercises 2.11.-2.14.</h3>
      <Countries />
      <hr />
    </>
  )
}

export default App;
