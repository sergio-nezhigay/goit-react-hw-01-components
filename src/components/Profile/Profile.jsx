import PropTypes from "prop-types";

import css from "./Profile.module.css";

export const Profile = ({username, stats, tag, location, avatar}) => {
    return (
        <div className={css.profile}>
          <div className={css.description}>
            <img
              src={avatar}
              alt={`${username} avatar`}
              className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
          </div>
        
          <ul className={css.stats}>
            <li>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
    );
  };

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
  
Profile.defaultProps = {
  username: "Anonymous",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};