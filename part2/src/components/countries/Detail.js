import React from 'react';

const Detail = ({ name, capital, pop, langs, flag }) => {
  return (
    <>
      <h1>{name}</h1>
      <div>capital: {capital}</div>
      <div>population: {pop.toLocaleString('en-US')}</div>
      <h2>languages</h2>
      <ul>{Object.keys(langs).sort((a, b) => ((langs[a] < langs[b]) ? -1 : ((langs[a] > langs[b]) ? 1 : 0))).map(key =>
        <li key={key}>{langs[key]}</li>
      )}</ul>
      <img src={flag} alt="flag" width="100px" />
    </>
  )
}

export default Detail