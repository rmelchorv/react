import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ({ counter }) => <><span>{counter} </span></>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseBy1 = () => setCounter(counter + 1)
  const decreaseBy1 = () => setCounter(counter - 1)
  const set2Zero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseBy1} text="plus" />
      <Button handleClick={decreaseBy1} text="minus" />
      <Button handleClick={set2Zero} text="zero" />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);