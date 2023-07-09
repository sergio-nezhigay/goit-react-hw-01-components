import css from './Profile.module.css';
import ProfStats from './ProfStats';

interface IProfileProps {
  username?: string;
  stats: Record<string, number>;
  tag?: string;
  location?: string;
  avatar?: string;
}

const Profile: React.FC<IProfileProps> = ({
  username = 'Anonymous',
  stats,
  tag,
  location = 'unknown',
  avatar = 'https://i.pravatar.cc/100',
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={`${username} avatar`} className={css.avatar} />
        <p className={css.name}>{username}</p>
        {tag && <p className={css.tag}>@{tag}</p>}
        <p className={css.location}>{location}</p>
      </div>
      <ProfStats stats={stats} />
    </div>
  );
};

export default Profile;
