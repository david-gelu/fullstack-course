import React from 'react'


const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part1 = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises }) => (
        <>
          <p key={exercises}>{name} {exercises}</p>
        </>
      )
      )}
    </>
  )
}
const Content = ({ parts }) => {
  return <Part1 parts={parts} />
}

const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach(({ exercises }) => {
    sum += exercises
  })
  return (
    <p>Number of exercises {sum} </p>
  )
}

const FirstPart = () => {
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

export default FirstPart