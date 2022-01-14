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
                <div className="carrousel-container">
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
            <section className='routine'>
                <div className="routine-container">
                    <div className='blur r-blur'></div>
                    <h1 className="r-name">Lorem, ipsum.</h1>
                </div>
            </section>
            <section className='journal'>
                <div className="journal-container">
                    <div className="entry entry1">
                        <p className="time">Mon - 01/01/2022</p>
                        <p className="j-title">Journal Title Here...</p>
                        <p className="set">2 hours</p>
                    </div>
                    <div className="entry entry2">
                        <p className="time">Mon - 01/01/2022</p>
                        <p className="j-title">Journal Title Here...</p>
                        <p className="set">2 hours</p>
                    </div>
                    <div className="entry entry3">
                        <p className="time">Mon - 01/01/2022</p>
                        <p className="j-title">Journal Title Here...</p>
                        <p className="set">2 hours</p>
                    </div>
                    <div className="entry entry4">
                        <p className="time">Mon - 01/01/2022</p>
                        <p className="j-title">Journal Title Here...</p>
                        <p className="set">2 hours</p>
                    </div>
                    <div className="entry entry5">
                        <p className="time">Mon - 01/01/2022</p>
                        <p className="j-title">Journal Title Here...</p>
                        <p className="set">2 hours</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home
