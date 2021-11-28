import React from 'react';
import opener from './opener.png'
import './landing.css';
import SignIn from '../SignIn/signIn';

function Landing() {
    return (
        <div>
            <div class="row">
                <div class="col-6">
                    <img className="image" src={opener} />
                </div>
                <div class="col-6 ">
                    <SignIn/>
                </div>
            </div>
        </div>
    )
}

export default Landing;