import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ title }) => <><h1>{title}</h1></>
const Statistic = ({ text, value }) => <div>{text}: {value}</div>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const increaseGood = () => setFeedback({ ...feedback, good: feedback.good + 1 })
  const increaseNeutral = () => setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
  const increaseBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 })
  // statistics
  const all = (feedback) => feedback.good + feedback.neutral + feedback.bad
  const average = (feedback) => {
    const _all = all(feedback)
    if (_all !== 0)
      return ((feedback.good - feedback.bad) / _all).toFixed(2) + " %"
    return "0.00 %"
  }
  const positive = (feedback) => {
    const _all = all(feedback)
    if (_all !== 0)
      return (feedback.good * 100.0 / _all).toFixed(2) + " %"
    return "0.00 %"
  }
  // factory for event handlers
  const setToFeedback = (value) => value

  return (
    <div>
      <Title title="give fedback" />
      <Button handleClick={setToFeedback(increaseGood)} text="good"></Button>
      <Button handleClick={setToFeedback(increaseNeutral)} text="neutral"></Button>
      <Button handleClick={setToFeedback(increaseBad)} text="bad"></Button>
      <Title title="statistics" />
      <Statistic text="good" value={feedback.good} />
      <Statistic text="neutral" value={feedback.neutral} />
      <Statistic text="bad" value={feedback.bad} />
      <Statistic text="all" value={all(feedback)} />
      <Statistic text="average" value={average(feedback)} />
      <Statistic text="positive" value={positive(feedback)} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);