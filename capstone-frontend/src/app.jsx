import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/homePage';
import Purchases from './components/Purchases/purchases';
import Landing from './components/Landing/landing';
import SignUp from './components/SignUp/signUp';
import SearchResults from './components/SearchResults/searchResults';
import Bag from './components/ShoppingBag/shoppingBag';
import Checkout from './components/Checkout/checkout';
import axios from 'axios';
import AddProduct from './components/AddProduct/addProduct';
import './app.css'

const App = () => {
    return (
       <div>
                <Landing/>
                <Home/>
                <Purchases/>
                <SignUp/>
                <SearchResults/>
                <Bag/>
                <Checkout/>
                <AddProduct/>
       </div> 
    )
};
export default App;