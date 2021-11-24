// import React, { useState, useEffect } from 'react';
// import './feed.css';
// // import photo from './testerphoto.jpeg'
// import axios from 'axios';

// function Feed(props) {
//     const [products, setProducts] = useState([]);

//     useEffect (() => {
//         axios.get("http://localhost:3000/api/products")
//         .then((response) => setProducts(response.data))
//     }, []);

//     return (
//         <div> 
//             <span className="new">What's New</span>
//             <div class="container">
//                 <div class="row align-items-start">
//                         <div class="col">
//                         <ul>
//                             {products &&
//                                 products.map((el) => {
//                                 return <li>{el.product.name}</li>;
//                             })}
//                         </ul>
//                         {/* <div class="col">
//                             <img src={photo} width="300px" height="300px" />
//                         </div>
//                         <div className = "col">
//                             <img src={photo} width="300px" height="300px"/> */}
//                     {/* </div> */}
//                 </div>
//             </div>        
//         </div>
//         </div>
//     )
// }

// export default Feed;