import React from 'react'

const Persons = ({ personsSearch, newName }) => {

  return (
    <>
      {personsSearch.map(person =>
        person.name !== newName ?
          <p key={person.id}>{person.name} {person.number}</p>
          : window.alert(`${newName} already exists in phonebok`)
      )}
    </>
  )

}

export default Persons