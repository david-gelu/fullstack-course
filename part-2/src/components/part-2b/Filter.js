import React, { useState, useEffect } from 'react'

const Filter = ({ persons, setPersonsSearch }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    persons.length && setPersonsSearch(persons.filter(person => person.name.toLowerCase().includes(search)))
  }, [persons, search, setPersonsSearch])

  const searchName = (event) => {
    setSearch(event.target.value)
  }
  return (
    <form>
      filter name shown with <input type='search' value={search} onChange={searchName} />
    </form>
  )

}

export default Filter