import React from 'react'
import Nav from './Nav'
import Arrow from '../assets/arrow.svg'

function Home() {
    return (
        <div>
            <Nav />
            <section className='startW'>
                <button> Start Today's Workout</button>
            </section>
            <section className="carrousel">
                <div className="arrow l-arrow"><img src={Arrow} alt="" /></div>
                <div className="container">
                    <div className="card c1">
                        <div className='blur'></div>
                        <h1 className="w-name">Lorem, ipsum.</h1>
                    </div>
                    <div className="card c2">
                        <div className='blur'></div>
                        <h1 className="w-name">Lorem, ipsum.</h1>
                    </div>
                    <div className="card c3">
                        <div className='blur'></div>
                        <h1 className="w-name">Lorem, ipsum.</h1>
                    </div>

                </div>
                <div className="arrow r-arrow"><img src={Arrow} alt="" /></div>
            </section>
            
        </div>
    )
}

export default Home
