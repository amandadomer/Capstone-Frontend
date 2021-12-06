import React, { useState, useEffect } from 'react';
import { Image, Link, useNavigate } from "react-router-dom";
import SideBar from '../SideBar/sideBar';
import "./shoppingCart.css";
import axios from 'axios';
import Checkout from '../Checkout/checkout'

function Cart(props) {
    const [cart, setCart] = useState([]);
    const [stripeToken, setStripeToken] = useState();
    const [product, setProduct] = useState();


    useEffect(() => {
        const id = props.user.user._id;
        const jwt = localStorage.getItem('token');
    
        getCart(id) 
            // .then(response => setCart(response.data))    

    }, [])

    const getCart = async (id) => {
        await axios.get(`http://localhost:3000/api/users/${id}/shoppingcart/`)
            .then (response => {
                console.log(response)
                setCart(response.data)
            })
    }
    return (
            <div className="row">
                <div className="col-4">
                    <SideBar/>
            </div>
                <div className="col-8">
                <span className="new">Your Shopping Cart</span>
                    {cart && cart.map((product) => {
                    return(
                        <> <Link to={`/detail/${product._id}`}><img className="thumbnail" src={product.img}/></Link><br></br>
                        <div className="descrip">{product.name}<br></br>
                        Size: {product.size}<br></br>
                        ${product.price}<br></br></div>
                        <Checkout/>
                        </>
                    )
                    })}
            </div>        
            </div>                                       
    )
};

export default Cart;