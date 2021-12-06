import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [nameOfCountry, setNameOfCountry] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const details = (country) => {
    setShowDetails(!showDetails)
    setNameOfCountry(country.name)
  }
  console.log(searchData)
  return (
    <div>
      <Filter countries={countries} setCountries={setCountries} search={search} setSearch={setSearch} searchData={searchData} setSearchData={setSearchData} />
      {searchData.map(country =>
        <div key={country.name}>
          {/* {searchData ?
            <> */}
          {searchData.length === 1 &&
            <>
              <h3>{country.name}</h3>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <br />
              <h4>languages:
                <ul>
                  {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                </ul>
              </h4>
              <br />
              <img src={country.flag} alt={country.name} width='200px' />
            </>}
          {searchData.length < 10 && <div> {country.name}
            {country.name === nameOfCountry &&
              <>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h4>languages:
                  <ul>
                    {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                  </ul>
                </h4>
                <br />
                <img src={country.flag} alt={country.name} width='200px' />
              </>}
            <button onClick={() => {
              details(country)
            }}>show</button>
          </div>}
          {searchData.length > 10 && <div> {country.name}</div>}
          {/* </>
            :
            <div> {country.name}
            </div>
          } */}
        </div>
      )}
    </div>
  )
}

export default Countries