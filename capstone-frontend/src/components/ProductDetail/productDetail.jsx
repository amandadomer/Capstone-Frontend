import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from "react-router-dom"
import SideBar from '../SideBar/sideBar';
import "./productDetail.css";
import Comment from '../Comments/comments';
import axios from 'axios';

function Detail(props) {
    const test = useParams();
    console.log(props.user.user._id)
    const [product, setProduct] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();
    const jwt = localStorage.getItem('token');

    const getProduct  = () => {
        try {
            axios.get(`http://localhost:3000/api/products/${test.id}`)
            .then(response => setProduct(response.data))
        }   catch(err) {}
    };

    useEffect(() => {
        getProduct ()
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(jwt)
        const id = props.user.user._id;
            await axios.post(`http://localhost:3000/api/users/${id}/shoppingcart/${product._id}/`, { headers: { 'x-auth-token': jwt }})
            .then (response => console.log(response))
            .then(navigate('/home'))
          };  
  
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <SideBar/>
                    </div>
                    <div className="col-8">
                    {product &&
                            <div>
                                <span className="new">{product.name}</span>
                                <img className="thumbnail" src={product.img}/><br></br>                  
                                Size: {product.size}<br></br>
                                Description: {product.description}<br></br>
                                Price: ${product.price}<br></br>
                                <button type="submit" className="add" onClick={handleSubmit}>Add to Cart</button><br></br><br></br>
                                Add Comment: <br></br>
                                <Comment id={product._id}/>
                                {product.reviews}
                            </div>
                    }
                    </div>
                </div>
            </div>
)};

export default Detail;