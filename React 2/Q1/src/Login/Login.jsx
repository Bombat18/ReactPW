 import { useNavigate } from 'react-router-dom';
import './Login.css'




function Login() {
     const navigate = useNavigate();

const handleSignupClick = () => {
         navigate('/signup');
    }
    return (
        <div className='mainDiv'>
            <div className='tom'>
                <div >
                    <img className="imageLogin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsGUMX5_VbQJQ4OpHr0SWdUin5PjJyLmfQ7Zzd8JyGA&s" alt="ERROR" />

                </div>
                <div className='inputTurm'>
                    <input className='inptsub' placeholder='Phone number,username,or email' type="text" />
                    <input className='inptsub' placeholder='Password' type="text" />
                    <button className='buttonsub' onClick={handleSignupClick}  >Sign in</button>
                </div>
                <div className='signup'>
                    <p>Don't have account? <span onClick={handleSignupClick}>Sign Up</span></p>
                </div>
            </div>

        </div>
    );
}
export default Login;