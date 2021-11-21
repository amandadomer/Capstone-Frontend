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
                   <span className="profile">your purchase history</span>
                   items purchased<br></br>
                   <form action="/action_page.php">
                        <label for="fname">leave a review</label><br></br>
                        <input className="box" type="text" id="fname" name="fname"></input>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Purchases;