import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

import Statistics from './components/Statistics/Statistics';

import Section from './components/Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (event) => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  // total count
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // persentage count
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

// onHandleIncrement = (event) => {
//   const name = event.target.name;
//   this.setState((prevState) => ({
//     [name]: prevState[name] + 1,
//   }));
// };

// // total count
// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// // persentage count
// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();
//   return total ? Math.round((good * 100) / total) : 0;
// };

// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const positivePercentage = this.countPositiveFeedbackPercentage();
//   console.log(this.state);

// }
