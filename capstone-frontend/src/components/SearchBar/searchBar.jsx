import axios from "axios";
import React, { useState, useEffect } from "react";
import "./searchBar.css";

function SearchBar({products, setProducts, searchInput, setSearchInput}) {

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <form className="form-inline">
        <div className="row form-group">
          <div className="col-10">
            <input
                value={searchInput}
                type="text"
                className="form-control"
                id="search_field"
                onChange={(event) => handleSearch(event)}
                placeholder="Search here..."
                rows="1"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
