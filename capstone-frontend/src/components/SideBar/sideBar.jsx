import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/searchBar';
import './sideBar.css';

function SideBar() {
    return (
        <div className="sideBar">
            <h1>Clothes Minded</h1><br></br>

            <Link className="link" to="/home">Browse All Items</Link><br></br>
            <Link className="link" to="/sell">Sell An Item</Link><br></br>
            <Link className="link" to="/bag">Shopping Cart</Link><br></br>
            <Link className="link" to="/">Logout</Link><br></br>
            <SearchBar/>
        </div>
    )
}

export default SideBar;