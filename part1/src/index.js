import React from 'react';
import ReactDOM from 'react-dom/client';

const App = ({ counter}) => {
  return (
    <div>{counter}</div>
  )
}
let counter = 1

const refresh = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>
  );
}
setInterval(() => {
  refresh();
  counter++;
}, 1000);
