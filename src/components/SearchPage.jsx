import PropTypes from 'prop-types';


const SearchPage = ({ books, updateShelf, onSearchQueryChange }) => {
  return (
    <div className="search-page">
      <header>
        <h1>Search Results</h1>
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
      </header>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.cover_image} alt={book.title} className="book-cover" />
            <div className="book-details">
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Publication Year:</strong> {book.publication_year}</p>
              <p><strong>Genre:</strong> {book.genre.join(', ')}</p>
              <p>{book.description}</p>
              <button onClick={() => updateShelf(book, 'Read')}>Mark as Read</button>
              <button onClick={() => updateShelf(book, 'Currently Reading')}>Mark as Currently Reading</button>
              <button onClick={() => updateShelf(book, 'Want to Read')}>Mark as Want to Read</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publication_year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      cover_image: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateShelf: PropTypes.func.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
};

export default SearchPage;
