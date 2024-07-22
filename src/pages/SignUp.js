import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='container d-flex flex-column align-items-center gap-3 my-auto h-100 mx-auto mt-5 justify-content-center'>
    <h1 className='text-center'>Sign Up</h1>
        <input type='text' placeholder='Enter Your Name' className='form-control'/>
        <input type='email' placeholder='Enter Your Email' className='form-control' />
        <input type='password' placeholder='New Paasword' className='form-control'/>
        <input type='password' placeholder='Confirm Password' className='form-control'/>
        <button className='btn btn-primary  '><Link to="/" className='text-white text-decoration-none'>Sign In</Link></button>
    </div>
  )
}

export default SignUp