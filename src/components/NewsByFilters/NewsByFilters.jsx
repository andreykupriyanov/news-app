import Pagination from '../Pagination/Pagination';
import NewsList from '../NewsList/NewsList';
import NewsFilters from '../NewsFilters/NewsFilters';

import { TOTAL_PAGES } from '../../constans/constants';

import styles from './styles.module.scss';

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = pageNumber => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        TOTAL_PAGES={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
