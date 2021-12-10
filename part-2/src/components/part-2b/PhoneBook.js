import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const PhoneBook = () => {
  const [persons, setPersons] = useState([])
  const [personsSearch, setPersonsSearch] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [configMsg, setConfigMsg] = useState('')
  return (
    <div>
      <h2>Phonebook</h2>
      {errorMsg
        ? <h3 className={`${errorMsg ? 'erorr' : ''}`}>{errorMsg}</h3>
        : <h3 className={`${configMsg ? 'success' : ''}`}>{configMsg}</h3>}
      <div>
        <Filter
          persons={persons}
          setPersonsSearch={setPersonsSearch} />
        <br />
        <h3> Add new contact</h3>
        <PersonForm
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          personsSearch={personsSearch}
          setConfigMsg={setConfigMsg}
          setErrorMsg={setErrorMsg}
        />
      </div>
      <h2>Numbers</h2>
      <Persons
        personsSearch={personsSearch}
        persons={persons}
        setPersons={setPersons}
        setErrorMsg={setErrorMsg}
      />
    </div>
  )
}
export default PhoneBook