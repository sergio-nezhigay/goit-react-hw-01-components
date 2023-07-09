import getRandomColor from './getRandomColor';

import css from './Statitem.module.css';

interface IStatItem {
  label: string;
  percentage: number;
}

const StatItem: React.FC<IStatItem> = ({ label, percentage }) => {
  const { backgroundColor, color } = getRandomColor();
  return (
    <li className={css.item} style={{ backgroundColor, color }}>
      <span>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatItem;
