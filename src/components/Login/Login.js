import React,{useState} from 'react';
import SignIn from '../SignIn/SignIn';
import './Login.css';

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="loginScreen"
                />
                <button onClick = {()=> setSignIn(true)} className="loginScreen__button">SignIn</button>
                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
                {signIn ? (
                    <SignIn />
                ) : (
                    <>
                        <h1>Unlimited films,TV programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to reate or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick = {()=> setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
            
        </div>
    )
}

export default Login;
