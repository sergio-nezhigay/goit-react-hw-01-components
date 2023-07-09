import css from './ProfStats.module.css';

interface IProfStatsProps {
  stats: Record<string, number>;
}

const ProfStats: React.FC<IProfStatsProps> = ({ stats }) => {
  return (
    <ul className={css.stats}>
      {Object.entries(stats).map(([label, quantity]) => (
        <li key={label}>
          <span className={css.label}>{label}</span>
          <span className={css.quantity}>{quantity}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProfStats;
