import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './signUp.css'

const SignUp = (props) => {
    return (
        <form>
            <div class="card">
                <label for="exampleInputEmail1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            <button type="submit" class="btn btn-dark" className="btn">Sign up</button><br></br>
            </div>
        </form>
    )
};

export default SignUp;