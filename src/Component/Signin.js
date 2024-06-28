import React from 'react'
import './Signin.css';
import { Link } from 'react-router-dom';
import logo1 from './Assets/Img/home/logo.png'

function Signin() {
  return (
    <div className='maindivv'>
     
    <div className='bg'>

    </div>

<div className='form1'> 
<div className='signin'>
<div className='logohalal-signup'>
        <img src={logo1}/>
    </div>
<div className='nav-homebtn'>
  <Link className='linenone' to={'/'}>
          <p>Home</p>
          </Link>
    </div>
     <div className='signin-title'>
           <h1>Log In</h1>
     </div>
         
         </div>

         <div className='hrtag'>
            <hr></hr>
         </div>

      
    <form>
      
      <br></br> 
        <br></br>
       
       <div className='fstname'>
       <input type='text' placeholder='Email' ></input>
       </div>
       
      <br></br>

       <div className='fstname'>
       <input type='text' placeholder='Password' ></input>
       </div>
        <br></br>
      

      <br></br>
         
       <div className='policy'>
           <input type='checkbox'></input>
           <span> Remember Me </span>
           <a>Forgot Password?</a>
       </div>

      <br></br>

       <div className='btn1'>
          <button type='submit'>Log In</button>
       </div>
          
          
       <div className='registers'>
         <p>Dont have an account? <Link className='linenone' to={'/signup'}> <span>  Register </span></Link></p>
       </div>
       

    </form>
    </div>


       

  </div>//last div
  )
}

export default Signin