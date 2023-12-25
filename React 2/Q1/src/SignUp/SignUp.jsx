import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
function SignUp() {

    const navigate = useNavigate();

    const handleSignupClick = () => {
             navigate('/');
        }


    return (
        <div className='mainDiv'>
            <div className='tom'>
            <div >
                <img className="imageLogin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsGUMX5_VbQJQ4OpHr0SWdUin5PjJyLmfQ7Zzd8JyGA&s" alt="ERROR" />

            </div>
            <div className='inputTurm'>
                <input className='inptsub' placeholder='Mobile Number Or Email' type="text" />
                <input className='inptsub' placeholder='Full Name' type="text" />
                <input className='inptsub' placeholder='Phone number,username,or email' type="text" />
                <input className='inptsub' placeholder='Password' type="text" />
                <button className='buttonsub' onClick={handleSignupClick} >Sign Up</button>
            </div>
            <div className='signup'>
                <p>Have an account?  <span onClick={handleSignupClick}>Log In </span></p>
            </div>
            </div>
           
        </div>
    );
}
export default SignUp;