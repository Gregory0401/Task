import React from 'react';
import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/tweetsSelectors';

import Tweet from 'components/Tweet/Tweet';
import { List } from './TweetsList.styled';

function TweetsList() {
  const tweetsArr = useSelector(selectTweets);
  return (
    <List>
      {tweetsArr.map(({ id, avatar, user, tweets, followers, isFollowing }) => (
        <li key={id}>
          <Tweet
            id={id}
            avatar={avatar}
            user={user}
            tweets={tweets}
            followers={followers}
            isFollowing={isFollowing}
          />
        </li>
      ))}
    </List>
  );
}

export default TweetsList;
