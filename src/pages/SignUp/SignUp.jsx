import { HomePage } from '../../components/HomePage/HomePage';
import './SignUp.css';
import loading from '../../assets/loading1.gif';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_CLIENT } from '../../services/api-client';

export const SignUp = () => {
    const [load, setLoad] = useState(false);
    const name = useRef('');
    const pwd = useRef('');
    const email = useRef('');

    const navigate = useNavigate();

    const register = async () => {
        setLoad(true);
        try{
            const userObj = {
                'name': name.current.value,
                'email': email.current.value,
                'password': pwd.current.value,
            };

            const result = await API_CLIENT.post(process.env.REACT_APP_SIGNUP_URL, userObj);

            if(result.data.message){
                sessionStorage.setItem("email", userObj.email);
                sessionStorage.setItem("name", userObj.name);
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
            <h2 id='register-title-text'>
                Register for <br/> managing your portfolio <br/> in an organised way!
            </h2>
            <div className='signup-signin'>
                <div className='input-element'>
                    Name
                </div>
                <input ref={name} className='input-box' id='name' placeholder='eg. Vaibhav' type='text'/>
                <div className='input-element'>
                    Email
                </div>
                <input ref={email} className='input-box' id='email' placeholder='eg. xyz@gmail.com' type='email'/>
                <div className='input-element'>
                    Password
                </div>
                <input ref={pwd} className='input-box' id='password' autocomplete="off"  placeholder='type password' type='password'/>

                <button onClick={register} className='submit-button'>
                    SignUp
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