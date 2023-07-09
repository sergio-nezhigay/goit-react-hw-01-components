import FriendListItem from './FriendListItem';

import css from './FriendList.module.css';

interface IFRiendList {
  friends: {
    id: number;
    avatar: string;
    name: string;
    isOnline: boolean;
  }[];
}

const FriendList: React.FC<IFRiendList> = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
