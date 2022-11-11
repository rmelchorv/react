import React from 'react';
import Detail from './Detail';

const Matching = ({ countries }) => {
  function showMatchingCountries() {
    if (countries.length > 10)
      return <p>Too many matches, specify another filter</p>
    else if (countries.length > 1)
      return (
        <ul>{countries.sort((a, b) => ((a.name.common < b.name.common) ? -1 : ((a.name.common > b.name.common) ? 1 : 0))).map(country =>
          <li key={country.name.common}>{country.name.common}</li>
        )}</ul>
      )
    else if (countries.length === 1)
      return <Detail name={countries[0].name.common} capital={countries[0].capital}
                pop={countries[0].population} langs={countries[0].languages} flag={countries[0].flags["png"]} />
    return <></>
  }

  return (
    <>{showMatchingCountries()}</>
  )
}

export default Matching