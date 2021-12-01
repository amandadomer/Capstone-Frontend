import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/sideBar';
import "./shoppingCart.css";
import axios from 'axios';

function Cart(props) {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const id = props.user.user._id;
        const jwt = localStorage.getItem('token');
            axios.get(`http://localhost:3000/api/users/${id}/shoppingcart/`)
            .then(response => setCart(response.data))    

    }, [])
    
    return (
        <div>
            <span className="new">Your Shopping Cart</span>
            <div className="container">
                    {cart && cart.map((product) => {
                    return(
                    <><img className="thumbnail" src={product.img}/>
                    {product.name}<br></br>
                    {product.size}<br></br>
                    {product.price}<br></br></>
                    )
                    })}
            </div>                                       
        </div>
    )
};

export default Cart;