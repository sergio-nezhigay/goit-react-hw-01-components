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

StatItem.defaultProps = {
  label: 'unknown parameter',
  percentage: '0',
};

export default StatItem;
