import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ({ value }) => <><span> {value} </span></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const App = () => {
  const [value, setValue] = useState(10)
  const setToValue = (newValue) => () => {
      setValue(newValue)
    }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(10)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);