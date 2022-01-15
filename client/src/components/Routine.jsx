import React from 'react'
import Nav from './Nav'
import SideBar from './SideBar'

function Routine() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    let list =[]
    let j = 1
    for (let i = 0; i<days.length; i++ ){
        
        list.push(<div key={i} className={`routine-cont-list r-${j}`}>
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
        </div>
    )
}

export default Routine
