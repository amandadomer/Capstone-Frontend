import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/sideBar';
import "./productDetail.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const test = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(test)
        axios.get(`http://localhost:3000/api/products/${products.id}`)
       .then(response =>{
           setProducts(response.data);
           console.log(response.data);
       })
        }, [])

        return (
            <div>
                <span className="new">Detail</span>
                <div class="container">
                    <div class="row align-items-start">
                    {products && products.filter((product) => {
                        return(
                                <ul><li>{product.img}</li>
                                <li>{product.name}</li>
                                <li>{product.price}</li></ul>
                            )
                        })}
                    </div>  
                </div>
            </div>
)};

export default Detail;