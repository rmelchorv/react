import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ text }) => <h1>{text}</h1>
const Display = ({ text }) => <div>{text}</div>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const App = ({ anectodes }) => {
  // component state
  const [quotes, setSelected] = useState({ selected: 0, votes: Array(anecdotes.length).fill(0) })
  const setQuote = () => setSelected({ ...quotes, selected: getRandInt(0, anectodes.length) })
  const voteQuote = () => {
    const votes = quotes.votes.concat()

    votes[quotes.selected] = (votes[quotes.selected] === undefined) ? 1 : votes[quotes.selected] + 1
    setSelected({ ...quotes, votes: votes })
  }
  // generates random number between min (included) and max (excluded):
  const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // get max votes
  const getMax = () => {
    console.log(quotes.votes.indexOf(Math.max.apply(null, quotes.votes)))
  }

  return (
    <div>
      <Button handleClick={voteQuote} text="vote" />
      <Button handleClick={setQuote} text="next anecdote" />
      <Title text="Anecdote of the day" />
      <Display text={"has " + ((quotes.votes[quotes.selected] === undefined) ? "0" : quotes.votes[quotes.selected]) + " votes"} />
      <Display text={anectodes[quotes.selected]} />
      <Title text="Anecdote with most votes" />
      <Display text={"has " + ((quotes.votes[getMax()] === undefined) ? "0" : quotes.votes[getMax()]) + " votes"} />
      <Display text={anectodes[getMax()]} />
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