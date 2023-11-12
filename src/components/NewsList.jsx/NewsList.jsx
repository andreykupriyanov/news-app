import NewsItem from '../NewsItem/NewsItem';

import styles from './styles.module.scss';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map(item => {
        return (
          <NewsItem key={item.id} item={item}>
            {item.title}
          </NewsItem>
        );
      })}
    </ul>
  );
};

export default NewsList;
