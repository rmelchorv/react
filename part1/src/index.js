import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ title }) => <><h1>{title}</h1></>
const Button = ({ handleClick, text }) => <><button onClick={handleClick}>{text}</button></>
const Statistic = ({ text, value }) => <><tr><td>{text}</td><td>{value}</td></tr></>
const App = () => {
  // save clicks of each button to its own state
  // ... the state of the application should remain in the App root component
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const increaseGood = () => setFeedback({ ...feedback, good: feedback.good + 1 })
  const increaseNeutral = () => setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
  const increaseBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 })
  // factory for event handlers
  const setToFeedback = (value) => value
  // statistic functions
  const all = (feedback) => feedback.good + feedback.neutral + feedback.bad
  const average = (feedback) => (all(feedback) === 0) ? "0.00 %" 
    : ((feedback.good - feedback.bad) / all(feedback)).toFixed(2) + " %"
  const positive = (feedback) => (all(feedback) === 0) ? "0.00 %"
    : (feedback.good * 100.0 / all(feedback)).toFixed(2) + " %"
  return (
    <div>
      <Title title="give fedback" />
      <Button handleClick={setToFeedback(increaseGood)} text="good"></Button>
      <Button handleClick={setToFeedback(increaseNeutral)} text="neutral"></Button>
      <Button handleClick={setToFeedback(increaseBad)} text="bad"></Button>
      <Title title="statistics" />
      <table>
        <tbody>
          <Statistic text="good" value={feedback.good} />
          <Statistic text="neutral" value={feedback.neutral} />
          <Statistic text="bad" value={feedback.bad} />
          <Statistic text="all" value={all(feedback)} />
          <Statistic text="average" value={average(feedback)} />
          <Statistic text="positive" value={positive(feedback)} />
        </tbody>
      </table>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);