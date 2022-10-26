import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ({ counter }) => <><span> {counter} </span></>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const increaseLeft = () => setLeft(left + 1)
  const increaseRight = () => setRight(right + 1)

  return (
    <div>
      <Display counter={left} />
      <Button handleClick={increaseLeft} text="left" />
      <Button handleClick={increaseRight} text="right" />
      <Display counter={right} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);