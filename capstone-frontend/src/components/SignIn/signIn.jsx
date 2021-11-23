import React from "react";
import { Link, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './signIn.css'

const SignIn = (props) => {
    return (
        <form>
            <div class="card">
                <label for="exampleInputEmail1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <button type="submit" class="btn btn-dark" className="btn">Log in</button><br></br>
                Don't have an account? <Link to="/signUp">Sign up here.</Link>

            </div>
        </form>
          
  )};

export default SignIn;