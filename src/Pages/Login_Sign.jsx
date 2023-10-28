import React from 'react'
import './CSS/Login_Sign.css'

const Login_Sign = () => {
  return (
    <div className='loginsign'>
      <div className="loginsign-container">
        <h1>Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsign-login">Already have an account? <span>Login here</span></p>
        <div className="loginsign-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login_Sign