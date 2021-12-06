import {React, useState, useEffect } from 'react';
import SideBar from '../SideBar/sideBar';
import StripeCheckout from 'react-stripe-checkout';
import smiley from './smiley.png';
import "./checkout.css";
import axios from 'axios';
import { NavItem } from 'react-bootstrap';

const KEY="pk_test_51K3CaRLRSdJZgymczXn6Pgwo30CMPwuOZzNDiwCnbDA4q0gGmOVsGvNp0Ojdt2XirVWuNaoBnPQbuPrr6IEFfkrN00wn7VzEOr"

const Checkout = () => {
    const [stripeToken, setStripeToken] = useState(null);
    
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() =>{
        const makeRequest = async() => {
            try{
                const res = await axios.post(
                    "http://localhost:3000/api/stripe/payment", {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                    );
                console.log(res.data);
            }   catch(err){
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])

    return (
        <div>   
        <StripeCheckout
            name="Clothes Minded"
            image= {smiley}
            billingAddress
            shippingAddress
            description = "Your total is $50"
            amount={5000}
            token={onToken}
            stripeKey={KEY}>

        <button className="buy">Buy Now</button>
        
        </StripeCheckout>
        </div>
    )

}

export default Checkout;