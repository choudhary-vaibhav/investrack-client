import { HomePage } from '../../components/HomePage/HomePage';
import './SignIn.css';

export const SignIn = () => {

    return <>
    <div className='container-sign'>
        <div className='left'>
                <HomePage/>
        </div>
        <div className='right'>
            <h2 id='login-title-text'>
                Login to Dashboard <br/> Welcome back!
            </h2>
            <div className='signup-signin'>
                <div className='input-element'>
                    Email
                </div>
                <input className='input-box' id='email' placeholder='eg. xyz@gmail.com' type='email'/>
                <div className='input-element'>
                    Password
                </div>
                <input className='input-box' id='password' autocomplete="off"  placeholder='type password' type='password'/>

                <button className='submit-button'>
                    SignIn
                </button>
            </div>
        </div>
    </div>
    
    </>
}