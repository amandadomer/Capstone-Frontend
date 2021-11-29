// import React, { useState, useEffect } from 'react';
// import SideBar from '../SideBar/sideBar';
// import "./productDetail.css";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Detail(props) {
//     const test = useParams();
//     const [products, setProducts] = useState([]);

//     const getProduct = async () => {
//         try {
//             const res = await axios.get(`http://localhost:3000/api/products/${products.id}`);
//             console.log(res)
//         }   catch(err) {}
//     };

//     useEffect(() => {
//         getProduct ()
//     } [];


//         return (
//             <div className="container">
//             <div className="row">
//                 <div className="col-4">
//                     <SideBar/>
//                 </div>
//                 <div class="col-8">                
//                 <span className="new">Product Detail</span>
//                     {products.filter((product) => {
//                         return(  
//                             <div>                      
//                                 <ul><li>{product.img}</li>
//                                 <li>{product.name}</li>
//                                 <li>{product.price}</li></ul>
//                                 </div>
//                             )
//                         })}
//                     </div>  
//                 </div>
//                 </div>
// )};

// export default Detail;