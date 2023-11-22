// src/components/SearchBar.js

import React from 'react';

function SearchBar({ onSearchChange, onCheckboxChange, showInStock }) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };

  return (
    <div>
      <label>
        Search:
        <input type="text" onChange={handleSearchChange} />
      </label>
      <label>
        <input type="checkbox" checked={showInStock} onChange={handleCheckboxChange} />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
