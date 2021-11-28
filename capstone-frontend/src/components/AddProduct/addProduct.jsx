import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/sideBar';
import './addProduct.css';

function AddProduct() {
    const [name, setName] = useState ("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [size, setSize] = useState ("");
    const [price, setPrice] = useState ();
    const [img, setImg] = useState("");

    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    <span className="new">Post Your Item</span><br></br>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label" onChange={(event) => setName(event.target.value)}  >What are you selling?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Add the name of your item along with brand name"></input>
                            <label for="exampleFormControlInput1" class="form-label" onChange={(event) => setCategory(event.target.value)}>Category</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="E.g. shirts, pants, skirts, dresses, shoes, accessories"></input>
                            <label for="exampleFormControlTextarea1" class="form-label" onChange={(event) => setDesc(event.target.value)}>Describe it!</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <label for="exampleFormControlInput1" class="form-label" onChange={(event) => setSize(event.target.value)}>Size</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                            <label for="exampleFormControlInput1" class="form-label" onChange={(event) => setPrice(event.target.value)}>Price</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                            <label for="exampleFormControlInput1" class="form-label" onChange={(event) => setImg(event.target.value)}>Image Link</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                            <button type="submit" className="button">Post</button><br></br>
                        </div>
                    </div>
                </div>
            </div>
       
    )
};

export default AddProduct;