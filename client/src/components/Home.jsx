import React, {useState} from 'react'
import Nav from './Nav'
import Main from './Main'

import SideBar from './SideBar'

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
