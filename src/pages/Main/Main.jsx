import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

import styles from './styles.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
