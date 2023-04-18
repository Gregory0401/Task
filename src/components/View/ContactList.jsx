import s from '../View/Tweets.module.css';
import { CardItem } from './CardItem';
import { useState, useEffect } from 'react';
import { fetchTitles } from '../fetch/api';
import usePagination from '../hooks/pagination';
import { Dropdown } from '../dropdown/Dropdown';

export const ContactList = () => {
  const [titles, setTitles] = useState([]);
  const [value, setValue] = useState('showAll');

  const savedUsers = JSON.parse(localStorage.getItem('savedInfo'));
  !savedUsers && localStorage.setItem('savedInfo', JSON.stringify(titles));
  const users = savedUsers ? savedUsers : titles;

  const { firstContentIndex, lastContentIndex, loadMore } = usePagination({
    contentPerPage: 9,
    count: titles.length,
  });

  useEffect(() => {
    try {
      async function fetchUsers() {
        const result = await fetchTitles();
        setTitles(result);
      }
      fetchUsers();
    } catch (error) {
      alert('ERRROORRRR');
    }
  }, []);

  const handleSelected = value => {
    setValue(value);
  };

  return (
    <>
      <Dropdown handleSelected={handleSelected} />

      {value === 'follow' && (
        <ul className={s.items}>
          {users.slice(firstContentIndex, lastContentIndex).map(user => {
            return !user.isClicked && <CardItem key={user.id} user={user} />;
          })}
        </ul>
      )}
      {value === 'following' && (
        <ul className={s.items}>
          {users.slice(firstContentIndex, lastContentIndex).map(user => {
            return user.isClicked && <CardItem key={user.id} user={user} />;
          })}
        </ul>
      )}
      {value === 'showAll' && (
        <ul className={s.items}>
          {users.slice(firstContentIndex, lastContentIndex).map(user => {
            return <CardItem key={user.id} user={user} />;
          })}
        </ul>
      )}

      <button className={s.button_load}>
        <div onClick={loadMore} className="page">
          Load More
        </div>
      </button>
    </>
  );
};
