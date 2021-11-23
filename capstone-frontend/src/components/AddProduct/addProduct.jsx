import React from 'react';
import SideBar from '../SideBar/sideBar';
import './addProduct.css';

function AddProduct() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    <span className="new">Post Your Item</span><br></br>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">What are you selling?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Add the name of your item along with brand name"></input>
                            <label for="exampleFormControlInput1" class="form-label">Category</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="E.g. shirts, pants, skirts, dresses, shoes, accessories"></input>
                            <label for="exampleFormControlTextarea1" class="form-label">Describe it!</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <label for="exampleFormControlInput1" class="form-label">Size</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                            <label for="exampleFormControlInput1" class="form-label">Price</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                            Upload your photos<br></br>
                            <button type="submit" className="button">Post</button><br></br>
                        </div>
                    </div>
                </div>
            </div>
       
    )
};

export default AddProduct;