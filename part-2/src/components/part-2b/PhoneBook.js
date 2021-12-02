import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const PhoneBook = () => {
  const personsArr = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  const [persons, setPersons] = useState(personsArr)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter
          personsArr={personsArr}
          setPersons={setPersons} />
        <br />
        <h3> Add new contact</h3>
        <PersonForm
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber} />
      </div>
      <h2>Numbers</h2>
      <Persons persons={persons} newName={newName} />
    </div>
  )
}
export default PhoneBook