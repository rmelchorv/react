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
  // estos estan bien
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // esto no funciona!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // también esto no está bien
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // y esto también es ilegal
    const [x, setX] = useState(-1000)
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);