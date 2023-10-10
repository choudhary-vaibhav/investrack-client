import { HomePage } from '../../components/HomePage/HomePage';
import './SignUp.css';

export const SignUp = () => {

    return <>
    <div className='container-sign'>
        <div className='left'>
                <HomePage/>
        </div>
        <div className='right'>
            <h2 id='register-title-text'>
                Register for <br/> managing your portfolio <br/> in an organised way!
            </h2>
            <div className='signup-signin'>
                <div className='input-element'>
                    Name
                </div>
                <input className='input-box' id='name' placeholder='eg. Vaibhav' type='text'/>
                <div className='input-element'>
                    Email
                </div>
                <input className='input-box' id='email' placeholder='eg. xyz@gmail.com' type='email'/>
                <div className='input-element'>
                    Password
                </div>
                <input className='input-box' id='password' autocomplete="off"  placeholder='type password' type='password'/>

                <button className='submit-button'>
                    SignUp
                </button>
            </div>
        </div>
    </div>
    
    </>
}