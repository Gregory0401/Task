import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdFilterAlt } from 'react-icons/md';
import { selectFilter } from 'redux/filters/filtersSelectors';
import { setFilter } from 'redux/filters/filtersSlice';
import { resetTweets } from 'redux/tweets/tweetsSlice';
import {
  FilterWrapper,
  FilterLabel,
  FilterCurrent,
  Popup,
  List,
  ListItem,
  Text,
} from './Filter.styled';

const filterItems = ['show all', 'follow', 'followings'];

function Filter() {
  const filterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handlerClick = e => {
    if (!filterRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (!isVisible) return;
    if (!filterRef.current) return;

    document.addEventListener('click', handlerClick);

    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, [isVisible]);

  const onSelectValue = value => {
    setIsVisible(false);

    if (filter !== value) {
      dispatch(resetTweets());
      dispatch(setFilter(value));
    }
  };

  return (
    <FilterWrapper ref={filterRef}>
      <FilterLabel>
        <MdFilterAlt color="#4b2a99" size={26} />
        <FilterCurrent
          onClick={() => {
            setIsVisible(prev => !prev);
          }}
        >
          {filter}
        </FilterCurrent>
      </FilterLabel>
      {isVisible && (
        <Popup>
          <List>
            {filterItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  onSelectValue(item);
                }}
                className={filter === item && 'active'}
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Popup>
      )}
    </FilterWrapper>
  );
}

export default Filter;
