import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ({ counter }) => <><span> {counter} </span></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const History = ({ allClics }) => <><p>{allClics.join('-')}</p></>
const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0, all: [] })
  const increaseLeft = () => setClicks({ ...clicks, left: clicks.left + 1, all: clicks.all.concat('L') })
  const increaseRight = () => setClicks({...clicks, right:clicks.right + 1,all: clicks.all.concat('R') })

  return (
    <div>
      <Display counter={clicks.left} />
      <Button handleClick={increaseLeft} text="left" />
      <Button handleClick={increaseRight} text="right" />
      <Display counter={clicks.right} />
      <History allClics={clicks.all} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);