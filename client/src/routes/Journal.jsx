import React from 'react'

function Journal() {
    return (
        <div>
            <section className='j-page'>
                <h1 className="j-p-title">Journal title</h1>
                <h4 className="j-p-date"></h4>
                <div className='j-p-content'></div>
            </section>
            <section className="journal">
                <div className="journal-container">
                
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

export default Journal
