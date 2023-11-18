import styles from './styles.module.scss';
import { formatDate } from '../../helpers/formateDate';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        onChange={e => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="Java Script"
      />
    </div>
  );
};

export default Search;
