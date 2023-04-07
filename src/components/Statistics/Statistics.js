import PropTypes from 'prop-types';

import StatItem from './StatItem';

import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <>
      {stats.length ? (
        <section className={css.statistics}>
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
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Statistics.defaultProps = {
  title: 'Stats',
};

export default Statistics;
