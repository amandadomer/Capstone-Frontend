import React from 'react';
import ReactDOM from "react-dom";
import Home from './components/HomePage/homePage';
import Profile from './components/Profile/profile';
import Landing from './components/Landing/landing';
import SignIn from './components/SignIn/signIn';
import './app.css'

const App = () => {
    return (
       <div>
           <Landing/>
       </div> 
    )
}
export default App;