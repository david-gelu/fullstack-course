import React from 'react'

const PersonForm = ({ persons, setPersons, setNewName, setNewNumber, newName, newNumber }) => {

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }


  const handleNrChange = (event) => {
    setNewNumber(event.target.value)
  }


  const addPerson = (event) => {
    const personDetails = {
      name: newName,
      number: newNumber,
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    event.preventDefault()

    setPersons(persons.concat(personDetails))
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
      <form >
        <div>  name:  <input value={newName} onChange={handlePersonChange} /></div>
        <div>number:  <input value={newNumber} onChange={handleNrChange} /></div>
      </form>
      <button onClick={(event) => addPerson(event)} type="submit">add</button>
    </>
  )

}

export default PersonForm