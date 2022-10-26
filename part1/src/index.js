import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseBy1 = () => setCounter(counter + 1)
  const set2Zero = () => setCounter(0)

  return (
    <div>
      <span>{counter} </span>
      <button onClick={increaseBy1}>plus</button>
      <button onClick={set2Zero}>zero</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);