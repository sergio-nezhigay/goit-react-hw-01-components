import PropTypes from 'prop-types';

import css from './Profile.module.css';
import ProfStats from './ProfStats';

const Profile = ({ username, stats, tag, location, avatar }) => {
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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  username: 'Anonymous',
  location: 'unknown',
  avatar: 'https://i.pravatar.cc/100',
};

export default Profile;
