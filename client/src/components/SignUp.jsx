import React from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'

function SignUp() {
    return (
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
    )
}

export default SignUp
