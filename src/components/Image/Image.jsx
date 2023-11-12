import styles from './styles.module.scss';
import { formatDate } from '../../helpers/formateDate';

const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
