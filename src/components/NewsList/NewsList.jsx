import NewsItem from '../NewsItem/NewsItem';

import withSkeleton from '../../helpers/hocs/withSkeleton';

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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;
