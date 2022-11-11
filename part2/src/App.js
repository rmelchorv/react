import React, { useState, useEffect } from 'react';
import Seeker from './components/countries/Seeker';
import Matching from './components/countries/Matching';
import axios from 'axios';

const App = () => {
  const [ countries, setContries ] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [ matching, setMatching ] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setContries(response.data)
      })
  }
  useEffect(hook, [])

  const handleFilterChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setMatching(countries.filter(country => 
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      ))
    } else {
      setMatching([])
    }
    setFilter(e.target.value)
  }
  return (
    <div>
      <Seeker filter={filter} handleFilterChange={handleFilterChange} />
      <Matching countries={matching} />
    </div>
  )
}

export default App