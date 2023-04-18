import React, { useState } from 'react';
import s from './Dropdown.module.css';

export const Dropdown = ({ handleSelected }) => {
  const [selectedValue, setSelectedValue] = useState('showAll');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    handleSelected(event.target.value);
  };
  return (
    <>
      <label htmlFor="tweets" className={s.label}>
        Select 👉
      </label>
      <select
        onChange={handleChange}
        value={selectedValue}
        name="tweets"
        id="tweets"
        className={s.select}
      >
        <option value="showAll" className={s.option}>
          Show all
        </option>
        <option value="follow" className={s.option}>
          Follow
        </option>
        <option value="following" className={s.option}>
          Following
        </option>
      </select>
    </>
  );
};
