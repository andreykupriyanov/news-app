import styles from './styles.module.scss';
import { formatDate } from '../../helpers/formateDate';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Good morning</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
