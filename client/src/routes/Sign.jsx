import React from 'react'
import SignIn from '../components/SignIn'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'

function Sign() {
    return (
        <div className='si-su'>
            <div className="signin">
                <div className="s-i-card">
                    <h3>Alredy have an account?</h3>
                    <h1>Sign In</h1>
                    <div className='separate-s-i-card'></div>
                    <form action="" method="post">
                        <div className="s-i-f-input">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="s-i-f-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="p-word" />
                        </div>
                        
                        <button>Sign in</button>
                    </form>
                </div>
            </div>
            <div className="signup">
                <div className="s-u-card">
                    <h3>New here?</h3>
                    <h1>Join or sign in usign other services</h1>
                    <div className="s-u-o o-google">
                        <img src={Google} alt="" />
                        <h4>Continue with Google</h4>
                    </div>
                    <div className="s-u-o o-facebook">
                    <img src={Facebook} alt="" />
                        <h4>Continue with Facebook</h4>
                    </div>
                    <div className="s-u-google-o"></div>
                </div>
            </div>
        </div>
    )
}

export default Sign
