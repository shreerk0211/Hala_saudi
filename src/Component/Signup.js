import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import logo from './Assets/Img/home/logo.png'

function Signup() {
  return (
    <div className='signup-maindiv'>
      
    <div className='bg'>

    </div>

    <div className='logohalal'>
        <img src={logo}/>
    </div>

    

<div className='form11'> 
  
<div className='signin'>
<div className='nav-homebtn'>
  <Link className='linenone' to={'/'}>
          <p>Home</p>
          </Link>
    </div>
     <div className='signtitle1'>
           <h1>Sign Up</h1>
     </div>
     
           <br></br>
     <div className='signtxt1'>
         <h4>Please fill this form to create an account!</h4>
     </div>
         <br></br>
         </div>

         <div className='hrtag'>
            <hr></hr>
         </div>
      <br></br>
         
    <form>
      
      <div className='fstname11'>
       <input type='text' placeholder='First Name'></input>

       <input type='text' placeholder='Last Name' ></input>
       </div>

      <br></br> 
      
       <div className='fstname00'>
       <input type='text' placeholder='Phone Number' ></input>
       
       </div>

        <br></br>
       
       <div className='fstname00'>
       <input type='text' placeholder='Email' ></input>
       </div>
       
      <br></br>

       <div className='fstname00'>
       <input type='text' placeholder='Password' ></input>
       </div>
        <br></br>
       <div className='fstname00'>
       <input type='text' placeholder='Confirm Password'></input>
       </div>

      <br></br>
         
       <div className='policy1'>
           <input type='checkbox'></input>
           <span> I accept the <a>Terms of</a> & <a>Privacy Policy</a></span>
       </div>

      <br></br>

       <div className='btn1'>
        <Link className='linenone' to={'/Signin'}>
          <button type='submit'>Sign Up</button>
          </Link>
       </div>

       <div className='registers'>
         <p> Already have a account ? <Link className='linenone' to={'/signin'}> <span>  Log in </span></Link></p>
       </div>

     
       

    </form>
    </div>




  </div>//last div
  )
}

export default Signup