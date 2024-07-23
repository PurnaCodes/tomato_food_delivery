import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Sign Up')

    return (
        <div className='login_popup'>
            <form className='login_popup_container'>
                <div className="login_popup_title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login_popup_inputs">
                    {currState === 'Sign Up' ? <input type="text" placeholder='Username' required /> : <></>}
                    <input type="email" placeholder='Your email address' required />
                    <input type="password" placeholder='Username' required />
                </div>
                <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                {currState === 'Sign Up' ?
                    <div className="login_popup_condition">
                        <input type="checkbox" required />
                        <p>By clicking, you agree to all terms & conditions</p>
                    </div>
                    :
                    <></>
                }

                {currState === 'Sign Up' ? <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                    : <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup