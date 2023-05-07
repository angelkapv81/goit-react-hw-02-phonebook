import PropTypes from 'prop-types';

const Search = ({ filterQuery, filter }) => {
  return (
    <div>
      <label>
        Find contacts
        <input
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
