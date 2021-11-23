import React from 'react';
import SideBar from '../SideBar/sideBar';
import "./checkout.css";

function Checkout() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    <span className="new">Checkout</span>
                </div>
            </div>
        </div>
)};

export default Checkout;