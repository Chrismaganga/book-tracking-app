import  { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';


const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const updateShelf = (book, shelf) => {
    console.log(`Updated ${book.title} to shelf: ${shelf}`);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {/* Assuming you have some way to switch between MainPage and SearchPage */}
      <MainPage
        books={filteredBooks}
        updateShelf={updateShelf}
        onSearchQueryChange={handleSearchQueryChange}
      />
      {/* or */}
      <SearchPage
        books={filteredBooks}
        updateShelf={updateShelf}
        onSearchQueryChange={handleSearchQueryChange}
      />
    </div>
  );
};

export default App;
