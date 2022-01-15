import React from 'react'
import LandImg from '../assets/img/landing.jpg'

function Landing() {
    return (
        <div>
            <section className="intro">
                <img src={LandImg} alt="" />
                <header>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </header>
            </section>
        </div>
    )
}

export default Landing
