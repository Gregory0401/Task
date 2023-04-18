import { useState, useEffect } from 'react';
import s from '../View/Tweets.module.css';
import React from 'react';

export const CardItem = ({ user }) => {
  const savedUsers = JSON.parse(localStorage.getItem('savedInfo'));
  let savedUser = savedUsers.find(savedUser => savedUser.id === user.id);

  const [amountOfFollowers, setAmountOfFollowers] = useState(
    savedUser.followers
  );
  const [isClicked, setIsClicked] = useState(
    savedUser.isClicked ? savedUser.isClicked : false
  );

  const formatedAmountOfFollowers = new Intl.NumberFormat('en-EN').format(
    amountOfFollowers
  );

  const handleClick = () => {
    setAmountOfFollowers(prevState =>
      !isClicked ? (prevState += 1) : (prevState -= 1)
    );
    setIsClicked(prevState => !prevState);
  };

  const updateSavedUsers = () => {
    savedUser = {
      ...savedUser,
      isClicked,
      followers: amountOfFollowers,
    };
    const indexOfSavedUser = savedUsers.findIndex(
      item => item.id === savedUser.id
    );
    savedUsers.splice(indexOfSavedUser, 1, savedUser);
  };

  useEffect(() => {
    updateSavedUsers();
    localStorage.setItem('savedInfo', JSON.stringify(savedUsers));
  });

  return (
    <>
      <li className={s.card}>
        <div className={s.logo}></div>
        <div className={s.img}></div>
        <div className={s.line}></div>

        <div className={s.avatar}></div>
        <img src={user.avatar} alt="avatar" className={s.avatar_img} />
        <ul className={s.data}>
          <li>
            <p className={s.name}> {`${user.user}`}</p>
          </li>
          <li>
            <p className={s.tweets}> {`${user.tweets} tweets`}</p>
          </li>
          <li>
            <p className={s.followers}>
              {' '}
              {`${formatedAmountOfFollowers} Followers`}
            </p>
          </li>
        </ul>

        <button
          className={s.button}
          onClick={handleClick}
          style={isClicked ? { background: '#5CD3A8' } : {}}
        >
          {!isClicked ? 'Follow' : 'Following'}
        </button>
      </li>
    </>
  );
};
