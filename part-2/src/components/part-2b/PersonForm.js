import { useEffect, useState } from 'react'
import Note from './Notes'
import personService from './services/services'

const PersonForm = ({ persons, setPersons, setNewName, setNewNumber, newName, newNumber, personsSearch, setIdNr, idNr, setConfigMsg, setErrorMsg }) => {
  const [showAll, setShowAll] = useState(false)


  const handleNameChange = (e) => {
    setNewName(e.target.value)
    setIdNr(idNr)
  }

  const handleNrChange = (e) => {
    setNewNumber(e.target.value)
    setIdNr(idNr)

  }
  useEffect(() => {
    personService
      .getAll()
      .then(personsSearch => {
        setPersons(personsSearch)
      })
  }, [setPersons])


  const addPerson = (e) => {
    e.preventDefault()
    const person = persons.filter((person) =>
      person.name === newName
    )
    console.log(person);
    const addPerson = person[0]
    const updatePersonNr = { ...addPerson, number: newNumber }

    if (person.length !== 0) {
      if (window.confirm(`${addPerson.name} is already added to the phonebook, update phone number?`)) {
        personService
          .update(updatePersonNr.id, updatePersonNr).then(returnedPerson => {
            setPersons(persons.map(personItem => personItem.id !== addPerson.id ? personItem : returnedPerson))
            setNewName('')
            setNewNumber('')
            setConfigMsg(`${updatePersonNr.name} was successfully updated`)
            setTimeout(() => { setConfigMsg(null) }, 5000)
          })
          .catch((error) => {
            console.log(error)
            setPersons(persons.filter(person => person.id !== updatePersonNr.id))
            setNewName('')
            setNewNumber('')
            setErrorMsg(`${updatePersonNr.name} was already deleted from server`)
            setTimeout(() => { setErrorMsg(null) }, 5000)
          })
      }
    } else {
      const addPerson = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
      }
      personService
        .create(addPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setConfigMsg(
            `${newName} was successfully added`
          )
          setTimeout(() => {
            setConfigMsg(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMsg(
            `${error.response.data.error}`
          )
          setTimeout(() => {
            setErrorMsg(null)
          }, 5000)
        })
    }
  }

  const toggleImportanceOf = (id) => {
    const person = personsSearch.find(n => n.id === id)
    const changedPersons = { ...person, important: !person.important }

    personService
      .update(id, changedPersons)
      .then(returnedPersons => {
        setPersons(personsSearch.map(person => person.id !== id ? person : returnedPersons))
      })
  }

  const personToShow = showAll ? personsSearch : personsSearch.filter(p => p.important)

  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      {personToShow.map(pers =>
        <Note
          key={pers.id}
          pers={pers}
          toggleImportance={() => toggleImportanceOf(pers.id)}
          setShowAll={setShowAll}
        />
      )}
      <br />
      <form >
        <div>name:  <input value={newName} onChange={handleNameChange} /></div>
        <div>number:  <input value={newNumber} onChange={handleNrChange} /></div>
      </form>
      <button onClick={(e) => { addPerson(e) }} type="submit">add</button>
    </div>
  )
}

export default PersonForm