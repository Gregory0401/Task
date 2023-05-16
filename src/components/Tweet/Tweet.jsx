import React, { useState } from 'react';
import axios from 'axios';

import {
  StyledWrapper,
  AvatarWrapper,
  Line,
  AvatarImg,
  UserName,
  Text,
  Button,
  List,
} from './Tweet.styled';

function Tweet({ id, avatar, user, tweets, followers, isFollowing }) {
  const [isFollow, setIsFollow] = useState(isFollowing);
  const [counter, setCounter] = useState(followers);

  const onClickFollow = id => {
    isFollow ? setCounter(prev => prev - 1) : setCounter(prev => prev + 1);
    setIsFollow(prev => !prev);

    const updateData = !isFollow
      ? {
          followers: counter + 1,
          isFollowing: true,
        }
      : {
          followers: counter - 1,
          isFollowing: false,
        };

    axios.put(
      `https://643aea3090cd4ba563051059.mockapi.io/api/users/${id}`,
      updateData
    );
  };

  return (
    <StyledWrapper>
      <Line>
        <AvatarWrapper>
          <AvatarImg src={avatar} alt="User avatar" width="62" height="62" />
        </AvatarWrapper>
      </Line>

      <List>
        <li>
          <UserName>{user}</UserName>
        </li>
        <li>
          <Text>{new Intl.NumberFormat('de-DE').format(tweets)} Tweets</Text>
        </li>
        <li>
          <Text>
            {new Intl.NumberFormat('de-DE').format(counter)} Followers
          </Text>
        </li>
      </List>

      <Button
        onClick={() => {
          onClickFollow(id);
        }}
        className={isFollow && 'active'}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </StyledWrapper>
  );
}

export default Tweet;
