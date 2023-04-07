import PropTypes from 'prop-types';

import css from './ProfStats.module.css';

const ProfStats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      {Object.entries(stats).map(([label, quantity]) => (
        <li>
          <span className={css.label}>{label}</span>
          <span className={css.quantity}>{quantity}</span>
        </li>
      ))}
    </ul>
  );
};

ProfStats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default ProfStats;
