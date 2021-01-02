import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage}%</li>
          </ul>
        )}
      </Section>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
