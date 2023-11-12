import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList.jsx/NewsList';

import { getNews } from '../../api/apiNews';

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log(response.news);
        setNews(response.news);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[15]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
