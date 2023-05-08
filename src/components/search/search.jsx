import PropTypes from 'prop-types';
import style from './Search.module.css';

const Search = ({ filterQuery, filter }) => {
  return (
    <div>
      <label className={style.contactFind}>
        Find contacts
        <input
          placeholder="кого шукаємо..."
          className={style.contactSearch}
          type="text"
          name="filter"
          value={filterQuery}
          onChange={filter}
        />
      </label>
    </div>
  );
};

Search.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Search;
