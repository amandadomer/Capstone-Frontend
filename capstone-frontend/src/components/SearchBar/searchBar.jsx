import React, { useState, useEffect } from 'react';
import './searchBar.css';

function SearchBar (props) {
    const [searchInput, setSearchInput] = useState(''); 

    const handleSearch = (event) => {
        
    }

      return (
            <div className="searchBar">
                <form className="form-inline">
                    <div className= "row form-group">
                        <div className= "col-10">
                            <input type="text" className="form-control" id="search_field" onChange={handleSearch} placeholder="Search here..." rows="1"/>
                        </div>
                    </div>
                </form>
            </div>
      );
  }
export default SearchBar;