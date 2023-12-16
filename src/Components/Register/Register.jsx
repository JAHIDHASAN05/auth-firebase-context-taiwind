import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
  const auth= getAuth(app)
    const handlerSignUp=event=>{
        event.preventDefault()
        const form= event.target
        const email= form.email.value;
        const password= form.password.value;



        createUserWithEmailAndPassword(auth, email, password)
        .then(signUpUser=>{
            const user= signUpUser.user
            event.target.reset()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form  onSubmit={handlerSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="Text" placeholder="Your Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <p href="#" className="label-text-alt link link-hover">alredy have an account? <Link to='/login' style={{color:'blue'}}>Log in</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;