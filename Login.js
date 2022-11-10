import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'


function Login() {
   const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [passward,setPassward]=useState("");

    const login=(event) =>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,passward)
        .then((auth)=>{
         navigate(`/`);
        })
        .catch((e)=>{
            alert(e.message)
        }); 

    }
    const register=(event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,passward)
        .then((auth)=>{
          navigate('/');
        })
        .catch((e)=>{
            alert(e.message)
        });
    }
 
  return (
    <div className="login">
      <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322' 
        className="login__logo" alt='amazon logo'/>
      </Link>
      <div className="login__container">
   
          <h1>Sign in</h1>
          <form >
          <h5>E-mail</h5>
          <input value={email} onChange={event=>setEmail(event.target.value)} type='email'/>
            <h5>Passward</h5>
          <input value={passward} onChange={event=>setPassward(event.target.value)} type='passward'/>
         
          <button onClick={login} className="login__signInButton"  type="submit">
            Sign in</button>
 
         </form>
        <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className="login__registerButton">
            Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
