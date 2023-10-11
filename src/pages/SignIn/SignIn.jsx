import { useNavigate } from 'react-router-dom';
import { HomePage } from '../../components/HomePage/HomePage';
import './SignIn.css';
import { API_CLIENT } from '../../services/api-client';
import { useRef, useState } from 'react';
import loading from '../../assets/loading1.gif';

export const SignIn = () => {
    const [load, setLoad] = useState(false);
    const pwd = useRef('');
    const email = useRef('');

    const navigate = useNavigate();

    const login = async () => {
        setLoad(true);
        try{
            const userObj = {
                'email': email.current.value,
                'password': pwd.current.value,
            };

            const result = await API_CLIENT.post(process.env.REACT_APP_SIGNIN_URL, userObj);

            if(result.data.message){
                sessionStorage.setItem("email", userObj.email);
                sessionStorage.setItem("name", result.data.user.name);
                navigate('/dashboard');
            }

        }catch(err){
            console.log(err);
            setLoad(false);
            window.alert("There is some error!");
        }
    }

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
                <input ref={email} className='input-box' id='email' placeholder='eg. xyz@gmail.com' type='email'/>
                <div className='input-element'>
                    Password
                </div>
                <input ref={pwd} className='input-box' id='password' autocomplete="off"  placeholder='type password' type='password'/>

                <button onClick={login} className='submit-button'>
                    SignIn
                </button>
                {load?
                    <div className='loading'>
                    <img className='loading-img' src={loading}></img>
                    </div>
                    :
                    <></>
                }
                
            </div>
        </div>
    </div>
    
    </>
}