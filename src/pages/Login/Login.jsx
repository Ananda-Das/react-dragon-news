// import React from 'react';

import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

        // sign in user 
        signIn(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })



    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h1 className="text-3xl text-center mx-auto mt-5">Please Login</h1>
      {/* form-start */}
      <form onSubmit={handleLogin} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {/* form-end */}
      <p className="text-center">Do not have an Account ? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
