import Profile from './profile/Profile';
import user from '../data/profile.json';



export const App = () => {
  const {username, tag, location, avatar, stats} = user;
  return (
    <>
      <Profile
              username={username}
              tag={tag}
              location={location}
              avatar={avatar}
              stats={stats}
            />
    </>
  )

};
