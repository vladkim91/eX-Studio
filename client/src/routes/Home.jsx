import React, {useState} from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'

import SideBar from '../components/SideBar'

function Home() {
    
    
    return (
        <div className='home'>
            <SideBar />
            <div className="mainBody">
                <Nav />
                <Main />
            </div>
            
        </div>
    )
}

export default Home
