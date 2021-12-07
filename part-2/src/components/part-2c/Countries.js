import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState()
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [nameOfCountry, setNameOfCountry] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const api_key = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${searchData.map(c => c.capital)}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [api_key, searchData, searchData.capital, showDetails])

  const details = (country) => {
    setNameOfCountry(country.name)
  }
  return (
    <div>
      <Filter countries={countries} search={search} setSearch={setSearch} searchData={searchData} setSearchData={setSearchData} />
      {searchData.map(country =>
        <div key={country.name}>
          {searchData.length === 1 && showDetails &&
            <>
              <h3>{country.name}</h3>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <br />
              <h4>Spoken languages: </h4>
              <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
              </ul>
              <br />
              <h4>Weather in {country.capital}: </h4>
              <div>Temperature: {Math.round((weather?.main?.temp - 273.15) * 10) / 10} celcius</div>
              <div>Wind speed {weather?.wind?.speed} km/h</div>
              <img src={country.flag} alt={country.name} width='200px' />
            </>
          }
          {searchData.length < 10 && searchData.length > 1 &&
            <div> {country.name}
              {country.name === nameOfCountry && showDetails &&
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
                  <h4>Weather in {country.capital}: </h4>
                  <div>Temperature: {Math.round((weather?.main?.temp - 273.15) * 10) / 10} celcius</div>
                  <div>Wind speed {weather?.wind?.speed} km/h</div>
                </>
              }
              <button onClick={() => {
                details(country)
                setShowDetails(!showDetails)
              }}>show</button>
            </div>
          }
          {searchData.length > 10 && <div> {country.name}</div>}
        </div>
      )}
    </div>
  )
}

export default Countries