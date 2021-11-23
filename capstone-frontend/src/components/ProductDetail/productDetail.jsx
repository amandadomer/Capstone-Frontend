import React from 'react';
import SideBar from '../SideBar/sideBar';
import "./productDetail.css";

function Detail() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    <span className="new">Product Detail</span>
                    <div class="container">
                        <div class="row align-items-start">
                                <div class="col-4">
                                    image                                        
                                </div>
                                <div class="col-8">
                                    Item name<br></br>
                                    description etc.
                                </div>                                
                        </div>
                    </div>        
                </div>
            </div>
        </div>
)};

export default Detail;