import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';

import css from './Statitem.module.css';

const StatItem = ({ label, percentage }) => {
  const { backgroundColor, color } = getRandomColor();
  return (
    <li className={css.item} style={{ backgroundColor, color }}>
      <span>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
