import React from 'react';
import SideBar from '../SideBar/sideBar';

function Profile() {
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <SideBar/>
                </div>
                <div class="col-9">
                    your profile
                </div>
            </div>
        </div>
    )
}

export default Profile;