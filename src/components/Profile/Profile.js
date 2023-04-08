import PropTypes from 'prop-types';

import css from './Profile.module.css';
import ProfStats from './ProfStats';

const Profile = ({
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

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
