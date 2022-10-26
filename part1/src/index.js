import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="world!" age="all"/>
      <Hello name="class." age={40+3}/>
    </div>
  )}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
