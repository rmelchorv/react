import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ title }) => <><h1>{title}</h1></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const Statistics = ({ feedback }) => {
  // statistics
  const all = (feedback) => feedback.good + feedback.neutral + feedback.bad
  const average = (feedback) => ((feedback.good - feedback.bad) / all(feedback)).toFixed(2) + " %"
  const positive = (feedback) => (feedback.good * 100.0 / all(feedback)).toFixed(2) + " %"

  if (all(feedback) === 0)
    return "no feedback given"
  return (
    <>
      <div>good: {feedback.good}</div>
      <div>neutral: {feedback.neutral}</div>
      <div>bad: {feedback.bad}</div>
      <div>all: {all(feedback)}</div>
      <div>average: {average(feedback)}</div>
      <div>positive: {positive(feedback)}</div>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  // ... the state of the application should remain in the App root component
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const increaseGood = () => setFeedback({ ...feedback, good: feedback.good + 1 })
  const increaseNeutral = () => setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
  const increaseBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 })
  // factory for event handlers
  const setToFeedback = (value) => value

  return (
    <div>
      <Title title="give fedback" />
      <Button handleClick={setToFeedback(increaseGood)} text="good"></Button>
      <Button handleClick={setToFeedback(increaseNeutral)} text="neutral"></Button>
      <Button handleClick={setToFeedback(increaseBad)} text="bad"></Button>
      <Title title="statistics" />
      <Statistics feedback={feedback} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);