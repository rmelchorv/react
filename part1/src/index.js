import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Quote = ({ quote }) => <div>{quote}</div>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const App = ({ anectodes }) => {
  // component state
  const [selected, setSelected] = useState(0)
  const setQuote = () => setSelected(getRandInt(0, anectodes.length))
  // generates random number between min (included) and max (excluded):
  const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>
      <Quote quote={anectodes[selected]} />
      <Button handleClick={setQuote} text="next anecdote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anectodes={anecdotes} />
  </React.StrictMode>
);