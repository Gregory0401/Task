import { NavLink } from 'react-router-dom';
import { ContactList } from './ContactList';
import 'react-dropdown/style.css';
import s from './Tweets.module.css';
import React from 'react';

export const Tweets = () => {
  return (
    <>
      <div className={s.container}>
        <ul className={s.items}>
          {' '}
          <ContactList />{' '}
        </ul>
        <div className={s.bottom_button}>
          <NavLink to="/" className={s.link}>
            <button className={s.button_back}>Back</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
