import React, {useEffect, useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './components/HomePage/homePage';
import Purchases from './components/Purchases/purchases';
import Landing from './components/Landing/landing';
import SignUp from './components/SignUp/signUp';
import SearchResults from './components/SearchResults/searchResults';
import Bag from './components/ShoppingBag/shoppingBag';
import Checkout from './components/Checkout/checkout';
import axios from 'axios';
import AddProduct from './components/AddProduct/addProduct';
import Detail from './components/ProductDetail/productDetail';
import './app.css'
import jwtDecode from 'jwt-decode';
import SignIn from './components/SignIn/signIn';

function App() {
    const [user, setUser] = useState();
      
    useEffect(() => {
        const jwt = localStorage.getItem('token');
      
        try {
            const user = jwtDecode(jwt);
            setUser({user});
      
        } catch {
      
        }
}, []);
      
    return (
       <div>
        <Routes> 
            <Route path="/" element= {<Landing/>} > </Route>
            <Route path="/signup" element = {<SignUp/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/sell" element = {<AddProduct/>} />
            <Route path="/detail/:id"  element = {<Detail/> } />
            <Route path="/bag" element = {<Bag/>} />
            <Route path="/purchases" element = {<Purchases/>} />
            
        </Routes>

       </div> 
    )
};
export default App;