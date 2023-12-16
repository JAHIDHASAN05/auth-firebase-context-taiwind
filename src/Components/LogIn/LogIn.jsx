import React from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const LogIn = () => {
     
     const auth= getAuth(app)
     console.log(app)
    const handlerSubmit=event=>{
        event.preventDefault()
        const form= event.target;
        const password= form.password.value;
        const email=form.email.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(user=>{
            const LoggedUser=user.user
        })
        .catch(error=>{
            console.error(error)
        })
        
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handlerSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <p href="#" className="label-text-alt link link-hover">New to this site? <Link to='/register' style={{color:'blue'}}>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log In</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;