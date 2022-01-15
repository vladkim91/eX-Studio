import React, { useState } from 'react'
import Nav from './Nav'
import SideBar from './SideBar'
import Close from '../assets/close.svg'

function Routine() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [pop, SetPop] = useState('pophide')

    const popClick = () =>{
        if (pop == "pophide") {
            SetPop('')
        }else{
            SetPop('pophide')
        }
    }
    

    let list =[]
    let j = 1
    for (let i = 0; i<days.length; i++ ){
        
        list.push(
        <div key={i} className={`routine-cont-list r-${j}`} onClick={()=>{popClick()}}>
            <img className='back' src={require(`../assets/img/${days[i]}.jpg`)} alt="" />
            <div className='blur r-blur'></div>
            <div className="float">
                <h1 className="r-name">{days[i]}</h1>
            </div>
        </div>)
    }
 return (
        <div className='home'>
            <SideBar />
            <div className="mainBody">
                <Nav/>
                <div className='routine-list'>
            <section className="r-list">
                {list}
                
            </section>
                </div>
            </div>
            <section className={`popUp ${pop}`}>
                <div className='popCard'>
                    <div className="popInfo">
                        <div className="r-l-day"><h1>Sunday</h1></div>
                        <div className="r-l-title"><h1>Bootcamp</h1></div>
                        <div className="r-l-divider"></div>
                        <div className="r-l-arr">
                            <div className="r-l-ex">
                                <span className="r-l-ex-num">1.</span>
                                <p className="r-l-ex-name">Bench Press</p>
                                <span className="r-l-time">02:00</span>
                            </div>
                        </div>
                        <div className="r-l-startbttn">Start</div>
                    </div>
                    <div className="close"  onClick={()=>{popClick()}}>
                        <img src={Close} alt="" />
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Routine
