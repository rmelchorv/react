import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = ({ name, capital, pop, langs, flag }) => {
  const [weather, setWeather] = useState({ weather_icons: [] })

  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${capital}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }
  useEffect(hook, [capital])

  return (
    <>
      <h1>{name}</h1>
      <div>capital: {capital}</div>
      <div>population: {pop.toLocaleString('en-US')}</div>
      <h2>languages</h2>
      <ul>{Object.keys(langs).sort((a, b) => ((langs[a] < langs[b]) ? -1 : ((langs[a] > langs[b]) ? 1 : 0))).map(key =>
        <li key={key}>{langs[key]}</li>
      )}</ul>
      <img src={flag} alt="flag" width="100px" style={{border: "1px solid black"}} />
      <div>
        <h2>weather in {capital}</h2>
        <div><h3 className="Element-inline">temperature:</h3> {weather.temperature} Celcius</div>
        <img src={weather.weather_icons[0]} alt="icon" width="75px" />
        <div><h3 className="Element-inline">wind:</h3> {weather.wind_speed} mph direction {weather.wind_dir}</div>
      </div>
    </>
  )
}

export default Detail