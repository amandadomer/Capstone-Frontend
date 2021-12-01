import React, { useState, useEffect } from 'react';
import './feed.css';
import { Image, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Feed(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       axios.get("http://localhost:3000/api/products")
       .then(response => setProducts(response.data))

        }, [])


    return (
        <div>
            <span className="new">What's New</span>
            <div className="container">
                <div className="row">
                <div className="col">
                    {products && products.map((product) => {
                        return(
                           <> <Link to={`/detail/${product._id}`}><img className="thumbnail" src={product.img}/></Link></>
                        )
                    })}
                </div>
                </div>  
            </div>
        </div>
    )
}


export default Feed;

