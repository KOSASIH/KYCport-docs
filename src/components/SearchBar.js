import React, { useState } from 'eact';
import algolia from 'algolia-search';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const algoliaClient = algolia('YOUR_APP_ID', 'YOUR_API_KEY');
    algoliaClient.search(query).then((response) => {
      setResults(response.hits);
    });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.objectID}>{result.name}</li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar;
