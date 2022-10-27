import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ({ counter }) => <><span> {counter} </span></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const increaseLeft = () => setClicks({ ...clicks, left: clicks.left + 1 })
  const increaseRight = () => setClicks({...clicks, right:clicks.right + 1})

  return (
    <div>
      <Display counter={clicks.left} />
      <Button handleClick={increaseLeft} text="left" />
      <Button handleClick={increaseRight} text="right" />
      <Display counter={clicks.right} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);