import React from 'react'
import { Link } from 'react-router-dom'

function register() {
    return (
        <div>
            <div class="custom-shape-divider-top-1642728710">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="rg-card">
                    <h3>Alredy Registered?</h3>
                    <div className="rg-redirect">
                    <Link to={'/sign'}>
                        <div className="rg-link">Sign In</div>
                    </Link>
                    <Link to={'/landing'}>
                        <div className="rg-link">Home</div>
                    </Link>
                    </div>
                    <h1>Register</h1>
                    <form action="" method="post">
                        <div className="s-rg-f-input">
                            <label htmlFor="f-name">First Name</label>
                            <input type="text" name="f-name" id="f-name" />
                        </div>
                        <div className="s-rg-f-input">
                            <label htmlFor="l-name">Last name</label>
                            <input type="text" name="l-name" id="l-name" />
                        </div>
                        <div className="s-rg-f-input">
                            <label htmlFor="u-name">Username</label>
                            <input type="text" name="u-name" id="u-name" />
                        </div>
                        <div className="s-rg-f-input">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="s-rg-f-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="p-word" />
                        </div>
                        <div className="s-rg-f-input">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" id="p-word" />
                        </div>
                        
                        <button>Register</button>
                    </form>
                </div>
        </div>
    )
}

export default register
