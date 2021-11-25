import React, {useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './signIn.css';
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)

    const user = {email: email, password: password}
    axios.post('http://localhost:3000/api/auth', user)
      .then(response => {
      localStorage.setItem('token', response.data);
      navigate('../home', {replace:true});
    });    
}
    return (
        <form>
            <div class="card">
                <label for="exampleInputEmail1" class="form-label"/>
                Email address:
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)}/>
                <label for="exampleInputPassword1" class="form-label"/>
                Password:
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit" class="btn btn-dark" className="btn" onClick={handleSubmit}>Log in</button><br></br>
                Don't have an account? <Link className="blk" to="/signup">Sign up here.</Link>
            </div>
        </form>
  )};

export default SignIn;