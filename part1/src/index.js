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

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);