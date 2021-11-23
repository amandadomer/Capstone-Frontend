import React from 'react';
import SideBar from '../SideBar/sideBar';
import './purchases.css';

function Purchases() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                   <span className="new">Your Purchase History</span>
                        Item purchased<br></br>
                        Write a review:
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
};

export default Purchases;