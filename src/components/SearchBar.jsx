
import PropTypes from 'prop-types';

const SearchBar = ({ query, onChange }) => {
  return (
    <div className="search-books-bar">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
