import React from 'react';
import SideBar from '../SideBar/sideBar';
import Feed from '../Feed/feed';
import "./homePage.css";

function Home() {
    return (
        <div>
             <div class="row">
                 <div class="col-4">
                     <SideBar/>
                 </div>
                 <div class="col-8">
                   <Feed/>
                </div>
             </div>
        </div>
)};

export default Home;