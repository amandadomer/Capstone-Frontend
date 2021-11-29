import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';
import SideBar from '../SideBar/sideBar';

function AddProduct() {
    
const navigate = useNavigate();
    const [name, setName] = useState()
    const [description, setDescription] = useState ();
    const [size, setSize] = useState ();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
  
    const handleName = (event) => {
        setName(event.target.value);
    };
    
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleSize = (event) => {
        setSize(event.target.value);
    };

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleImg = (event) => {
        setImg(event.target.value);
    }
  
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const newPost={
            name: name,
            description: description,
            size: size,
            price: price, 
            img: img
        }
            console.log(newPost)
            await axios.post(`http://localhost:3000/api/products/`, newPost)
            .then(navigate(`/home`))
          };  
  
      return (
        <div>
             <div class="row">
                 <div class="col-4">
                     <SideBar/>
                 </div>
                 <div class="col-8">
                 <form onSubmit ={handleSubmit}>
                            <label for="exampleFormControlInput1" class="form-label">What are you selling?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleName}></input>
                            <label for="exampleFormControlTextarea1" class="form-label" >Describe it!</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleDescription}></textarea>
                            <label for="exampleFormControlInput1" class="form-label" >Size</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleSize}></input>
                            <label for="exampleFormControlInput1" class="form-label">Price</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handlePrice}></input>
                            <label for="exampleFormControlInput1" class="form-label">Image Link</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleImg}></input>
                            <button type="submit" className="button">Post</button><br></br>
                      </form>
                </div>
             </div>
        </div>    
    );
}

export default AddProduct;