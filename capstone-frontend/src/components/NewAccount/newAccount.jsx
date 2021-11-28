import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './newAccount.css';
import axios from "axios";

const NewAccount = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password)

    const user = {email: email, password: password}
    axios.post('http://localhost:3000/api/users/', user)
        .then(response => {
        localStorage.setItem('token', response.data);
        navigate('/home', {replace:true});
        });    
    }
    return (
        <form>
            <div class="card">Sign up now to start buying and selling!
                <label for="exampleInputEmail1" class="form-label"/>
                Email address:
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)}/>
                <label for="exampleInputPassword1" class="form-label"/>
                Password:
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit" class="btn btn-dark" className="btn" onClick={handleSubmit}>Sign Up</button><br></br>
            </div>
        </form>
    );
}

export default NewAccount;