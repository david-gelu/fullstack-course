import React from 'react'


const Header = ({ courses }) => {
  return (
    <h1>{courses}</h1>
  )
}

const Part1 = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises, id }) => (
        <div key={id}>
          <p>{name} {exercises}</p>
        </div>
      )
      )}
    </>
  )
}
const Content = ({ parts }) => {
  return <Part1 parts={parts} />
}

const Total = ({ parts }) => {
  const exercice = parts.map(e => e.exercises)
  const total = exercice.reduce((a, b) => a + b)
  return (
    <p><strong>Number of exercises {total} </strong></p>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(({ id, name, parts }) =>
        <div key={id}>
          <Header courses={name} />
          <Content parts={parts} />
          <Total parts={parts} />
        </div>
      )}
    </>
  )
}

export default Course