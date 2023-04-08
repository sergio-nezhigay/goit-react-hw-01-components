import PropTypes from 'prop-types';

import StatItem from './StatItem';

import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {stats.length ? (
        <ul className={css.statList}>
          {stats.map(parameter => (
            <StatItem
              key={parameter.id}
              label={parameter.label}
              percentage={parameter.percentage}
            />
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
