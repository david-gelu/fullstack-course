import personService from './services/services'

const Persons = ({ personsSearch, persons, setPersons, setErrorMsg }) => {

  const deletePerson = (id) => {
    const person = persons.length && persons.find(n => n.id === id)
    const changedPersons = { ...person, id: person.id }
    personService
      .deletePers(id, changedPersons)
      .then(changedPersons => {
        setPersons(changedPersons.id !== id ? person : changedPersons)
      })
      .catch(error => {
        setErrorMsg(`${changedPersons} was already deleted from server`)
        setTimeout(() => { setErrorMsg(null) }, 5000)
      })
  }

  return (
    <>
      {personsSearch.map(person =>
        <div key={person.id}  >
          <p>{person.name} {person.number}</p>
          <button onClick={() => {
            window.confirm(`delete ${person.name}`) && deletePerson(person.id)
          }}>delete </button>
        </div>
      )}
    </>
  )

}

export default Persons