import React, {useState} from 'react'
import Nav from './Nav'
import Main from './Main'
import Burger from '../assets/burger.svg'

function Home() {
    const [sideBAr, SetSideBar] = useState("min")
    function click(s){
        if (s == "min") {
            SetSideBar("max")
        }else{
            SetSideBar("min")
        }
    }
    return (
        <div className='home'>
            <div className={`sideBar ${sideBAr}`}>
                <div id="burger" className='add' onClick={()=>{click(sideBAr)}}><img src={Burger} alt="" /></div>
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
