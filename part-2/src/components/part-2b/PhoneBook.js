import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'


const PhoneBook = () => {
  const [persons, setPersons] = useState([])
  const [personsSearch, setPersonsSearch] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter
          persons={persons}
          setPersonsSearch={setPersonsSearch} />
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
      <Persons personsSearch={personsSearch} newName={newName} />
    </div>
  )
}
export default PhoneBook