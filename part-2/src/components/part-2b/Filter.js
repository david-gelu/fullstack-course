import React, { useState, useEffect } from 'react'

const Filter = ({ persons, setPersons }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setPersons(persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

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