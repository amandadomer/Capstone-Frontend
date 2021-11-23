import React from 'react';
import SearchBar from '../SearchBar/searchBar';
import './sideBar.css';

function SideBar() {
    return (
        <div className="sideBar">
            <h1>name of app</h1><br></br>
            Browse All Items<br></br>
            Post An Item<br></br>
            My Purchases<br></br>
            Shopping Bag <br></br>
            <SearchBar/>
        </div>
    )
}

export default SideBar;