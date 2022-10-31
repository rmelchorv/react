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
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);