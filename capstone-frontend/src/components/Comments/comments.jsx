import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom"
import './comments.css';
import axios from 'axios';

const Comment = (props) => {
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    // const [product, setProduct] = useState();

    const commentHandler = (event) => {
        setComment(event.target.value)
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
            await axios.put(`http://localhost:3000/api/products/${props.id}/reviews/`, {text: comment})
            .then (response => console.log(response))
            .then(navigate('/home'))
          };  
       
    return (
         <div>
            <form onSubmit={handleSubmit}>
                <input className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange = {(e) => commentHandler(e)} ></input><br></br>
                <button type="submit" className="cmt">Submit</button>
            </form>  
        </div>
    )
}

export default Comment;