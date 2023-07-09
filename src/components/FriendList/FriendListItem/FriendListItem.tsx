import css from './FriendListItem.module.css';

interface IFrienListItem {
  avatar: string;
  name: string;
  isOnline: boolean;
  id?: number;
}

const FriendListItem: React.FC<IFrienListItem> = ({
  id,
  avatar,
  name,
  isOnline,
}) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
