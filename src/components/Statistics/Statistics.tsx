import StatItem from './StatItem';

import css from './Statistics.module.css';

interface IStatisticsProps {
  title: string;
  stats: { id: string; label: string; percentage: number }[];
}

const Statistics: React.FC<IStatisticsProps> = ({ title, stats }) => {
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

export default Statistics;
