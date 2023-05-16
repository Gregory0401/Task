import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineRollback } from 'react-icons/ai';
import TweetsList from 'components/TweetsList/TweetsList';
import ButtonUp from 'components/ButtonUp/ButtonUp';

import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import {
  Button,
  Wrapper,
  FilterWrapper,
  ButtonGoBack,
} from './TweetsPage.styled';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from 'redux/tweets/tweetsOperations';
import {
  selectIsLoading,
  selectError,
  selectIsDataOver,
} from 'redux/tweets/tweetsSelectors';
import { selectFilter, selectPage } from 'redux/filters/filtersSelectors';
import { incrementPage } from 'redux/filters/filtersSlice';

function TweetsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isDataOver = useSelector(selectIsDataOver);

  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);

  const [isVisibleBtn, setIsVisibleBtn] = useState(false);

  const fetchData = async () => {
    dispatch(fetchTweets({ filter, page }));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter]);

  useEffect(() => {
    const trigger = 350;

    window.addEventListener('scroll', () => {
      window.scrollY > trigger ? setIsVisibleBtn(true) : setIsVisibleBtn(false);
    });
  }, []);

  const onLoadMore = () => {
    dispatch(incrementPage());
  };

  const onGoBack = () => {
    navigate('/');
  };

  error && toast(error);

  return (
    <Container>
      <Wrapper>
        <FilterWrapper>
          <ButtonGoBack onClick={onGoBack} type="button">
            Go back
            <AiOutlineRollback size="22px" />
          </ButtonGoBack>
          <Filter />
        </FilterWrapper>
        <TweetsList />
        {isLoading && <Loader />}
        {!isDataOver && !isLoading && (
          <Button onClick={onLoadMore} type="button">
            Load more
          </Button>
        )}
        {isVisibleBtn && <ButtonUp />}
      </Wrapper>
    </Container>
  );
}

export default TweetsPage;
