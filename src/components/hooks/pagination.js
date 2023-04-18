import { useState } from 'react';

const usePagination = ({ contentPerPage }) => {
  const [page, setPage] = useState(1);

  const lastContentIndex = page * contentPerPage;

  const firstContentIndex = 0;

  return {
    loadMore: () => {
      setPage(prevState => prevState + 1);
    },
    firstContentIndex,
    lastContentIndex,
  };
};

export default usePagination;
