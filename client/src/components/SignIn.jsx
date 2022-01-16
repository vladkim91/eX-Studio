import React from 'react'

function SignIn() {
    return (
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
    )
}

export default SignIn
