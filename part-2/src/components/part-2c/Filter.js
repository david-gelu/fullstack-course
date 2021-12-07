import React, { useEffect } from 'react'

const Filter = ({ countries, search, setSearch, setSearchData }) => {

  useEffect(() => {
    setSearchData(countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())))
  }, [countries, search, setSearchData])

  const searchName = (e) => { setSearch(e.target.value ?? null) }

  return (
    <form>
      find countries <input type='search' value={search} onChange={searchName} />
    </form>
  )
}

export default Filter