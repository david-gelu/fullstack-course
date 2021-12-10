import React from 'react'

const Note = ({ pers, toggleImportance }) => {
  const label = pers.important
    ? 'make not important' : 'make important'

  return (
    <>
      <li>
        {pers.name}
        <button onClick={toggleImportance}>{label}</button>
      </li>
    </>
  )
}

export default Note
