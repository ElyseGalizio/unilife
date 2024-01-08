import React from 'react'
import './SearchCity.css'

function SearchCity() {
  return (
    <div className="search-container">
      <select className="search-menu">
        <option value="search-by-city" selected>
          Search by city
        </option>
        <option value="London">London</option>
        <option value="London">London</option>
        <option value="London">London</option>
        <option value="London">London</option>
      </select>
      <button className="search-button">Find Homes</button>
    </div>
  );
}

export default SearchCity