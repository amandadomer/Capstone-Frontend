import { React, useState}  from 'react';
import SideBar from '../SideBar/sideBar';
import Feed from '../Feed/feed';
import "./homePage.css";

function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState();

    return (
        <div>
             <div class="row">
                 <div class="col-4">
                     <SideBar searchInput={searchInput} setSearchInput={setSearchInput} products={products} setProducts={setProducts}/>
                 </div>
                 <div class="col-8">
                   <Feed searchInput={searchInput} setSearchInput={setSearchInput} products={products} setProducts={setProducts}/>
                </div>
             </div>
        </div>
)};

export default Home;