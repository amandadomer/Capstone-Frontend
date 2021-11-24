import React from 'react';
import SideBar from '../SideBar/sideBar';
import "./shoppingBag.css";

function Bag() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    <span className="new">Your Shopping Bag</span>
                    
                </div>
            </div>
        </div>
)};

export default Bag;