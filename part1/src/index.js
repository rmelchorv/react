import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <span>{counter} </span>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);