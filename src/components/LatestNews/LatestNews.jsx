import styles from './styles.module.scss';

import BannersList from '../BannersList/BannersList';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
