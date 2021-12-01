import React from 'react';
import SideBar from '../SideBar/sideBar';
import './searchResults.css';

function SearchResults() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                    <div class="col-9">
                        <div> <span className="new">Search Results</span>
                            <div class="container">
                                <div class="row align-items-start">
                                        words
                                
                                </div>
                            </div>        
                        </div>
                                </div>
                    </div>
                </div>
    )
}

export default SearchResults;