import React, {useState} from 'react'
import Burger from '../assets/burger.svg'
import Closer from '../assets/close.svg'

function SideBar() {
    const [sideBAr, SetSideBar] = useState("min")
    const [display, SetDisplay] = useState("hide")
    const [Menu, SetMenu] = useState("Burger")
    function click(s){
        if (s == "min") {
            SetSideBar("max")
            SetMenu("Closer")
            setTimeout(()=>{SetDisplay("show")}, 400)
            
        }else{
            SetSideBar("min")
            SetDisplay("hide")
            SetMenu("Burger")
        }
    }
    return (
            <div className={`sideBar ${sideBAr}`}>
                <div id="burger" className='add' onClick={()=>{click(sideBAr)}}><img src={Menu=='Burger'? Burger : Closer} alt="" /></div>
                <div id='side-content' className={display}>
                    <li>Browse Exercises</li>
                    <li>Browse Workouts</li>
                    <li>Journal</li>
                </div>
            </div>
    )
}

export default SideBar