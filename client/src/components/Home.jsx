import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Burger from '../assets/burger.svg'

function Home() {
    return (
        <div className='home'>
            <div className="sideBar max">
                <div id="burger" className='add'><img src={Burger} alt="" /></div>
                <div id='side-content'>
                </div>
            </div>
            <div className="mainBody">
                <Nav />
                <Main />
            </div>
            
        </div>
    )
}

export default Home
