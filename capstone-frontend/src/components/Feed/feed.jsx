import React, { useState, useEffect } from 'react';
import './feed.css';
import { Image, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Feed({products, setProducts, searchInput, setSearchInput}) {

    const getProducts = async () => {
        axios
          .get("http://localhost:3000/api/products")
          .then((response) => setProducts(response.data));
      };
    
    useEffect(() => getProducts()
    ,[])

    return (
        

        <div>
                    <span className="new">What's New</span>
            <div className="container">
                <div className="row">
                <div className="col-6">
                    {products && products.map((product) => (product.name.toLowerCase().includes(searchInput) || 
                    product.name.toUpperCase().includes(searchInput)) ?
                        <> <Link to={`/detail/${product._id}`}><img className="thumbnail" src={product.img}/></Link><br></br><div className="descrip">{product.name} ${product.price}</div></> :null
                    )}
                </div>
                </div>
            </div>  
        </div>
    )
}


export default Feed;

