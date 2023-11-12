import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList.jsx/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

import { getNews } from '../../api/apiNews';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[15]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}
    </main>
  );
};

export default Main;
