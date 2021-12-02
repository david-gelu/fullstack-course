import React from 'react'

const Persons = ({ persons, newName }) => {

  return (
    <>
      {persons.map(person =>
        person.name !== newName ?
          <p key={person.id}>{person.name} {person.number}</p>
          : window.alert(`${newName} already exists in phonebok`)
      )}
    </>
  )

}

export default Persons