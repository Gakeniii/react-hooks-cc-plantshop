import React, { useState } from "react";

function Search({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
