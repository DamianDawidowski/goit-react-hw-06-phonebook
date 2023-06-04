import FriendList from './FriendList/FriendList';
import userInfo from './Profile/user.json';
import Profile from './Profile/Profile';
import friends from './FriendList/friends.json';
import Statistics from './Statistics/Statistics';
import statsData from './Statistics/data.json';
import Transactions from './Transactions/TransactionHistory';
import items from './Transactions/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userImage={avatar}
        tag={tag}
        name={username}
        location={location}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
      <Transactions items={items} />
    </div>
  );
};
