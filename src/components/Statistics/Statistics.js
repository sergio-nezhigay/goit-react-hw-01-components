import PropTypes from 'prop-types';

import getRandomColor from './getRandomColor';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {' '}
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(parameter => (
          <StatItem
            key={parameter.id}
            label={parameter.label}
            percentage={parameter.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

const StatItem = ({ label, percentage, id }) => {
  const { backgroundColor, color } = getRandomColor();
  return (
    <li className={css.item} style={{ backgroundColor, color }}>
      <span>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Statistics.defaultProps = {
  title: 'Stats',
};
StatItem.defaultProps = {
  label: 'unknown parameter',
  percentage: '0',
};

export default Statistics;
