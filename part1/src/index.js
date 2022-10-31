import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
/*
const Display = ({ counter }) => <><span> {counter} </span></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const History = ({ allClics }) => {
  if (allClics.length === 0) {
    return (
      <><p>the app is used by pressing the buttons</p></>
    )
  }
  return (  
    <><p>{allClics.join('-')}</p></>
  )
}
*/
const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);