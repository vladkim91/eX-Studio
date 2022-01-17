import React, { useState } from 'react'
import Close from '../assets/close.svg';
import Add from '../assets/add.svg';
import Delete from '../assets/delete.svg';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';

function Journal() {
    let maxLength = 1000
    let [textValue, SetTextValue] = useState('')
    const [pop, SetPop] = useState('pophide');

    const handleChange = (e) =>{
        SetTextValue(e.target.value)
    }

    const popClick = (fe) => {
        if (pop == 'pophide') {
          SetPop('j-pop-show');
        } else {
          SetPop('pophide');
        }
      };

    console.log(textValue)
    return (
        <div className='home'>
            <SideBar />
            <div className="mainBody">
                <Nav />
                <h1 className="j-name">My Journal</h1>
                <section className="journal">
                    <h3 className="j-cont-name">Choose Journal page to view</h3>
                <div className="journal-container">
                    <div className='j-cont-add' onClick={()=>{popClick()}}>
                        <img src={Add} alt="" />
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
                    <p className="set" >2 hours</p>
                </div> 
                </div>
                </section>
                <section className='j-page'>
                <h1 className="j-p-title">Journal title</h1>
                <h4 className="j-p-date">January 15, 2022</h4>
                <div className="separate-j-page"></div>
                <p className='j-p-content'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dignissimos temporibus similique, fuga quod placeat cum 
                     dolores deleniti quas blanditiis consequuntur quo debitis 
                     voluptatum hic, nihil ad autem rerum animi expedita suscipit 
                     vitae perspiciatis? At voluptatum ipsa, voluptatem aperiam
                      omnis quam saepe facere perferendis, quidem earum totam 
                      vitae recusandae, optio reprehenderit quisquam. Itaque 
                      magni deserunt repellendus cupiditate! Vero atque voluptas
                       soluta minima ratione, consectetur in.
                </p>
                </section>
            
                <section className={`j-add ${pop}`}>
                <div className='j-add-p'>
                <form action="" method="post">
                    <div className="j-add-p-title">
                        <label htmlFor=""> Page Title</label>
                        <input type="text" />
                    </div>
                    <div className="j-add-p-date">
                      <label>Entry date</label> <span id='e-date'> {new Date()
                  .toLocaleDateString(undefined, {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  })
                  }</span>
                    </div>
                    <div className="j-add-p-content">
                        <label htmlFor="">Page Note</label>
                        <div className='j-add-p-textarea'>
                        <textarea name="" id=""  maxLength={maxLength} placeholder={`Enter note... Limit ${maxLength} characters`}
                        value={textValue} onChange={(e)=>handleChange(e)}>
                        {console.log(maxLength - textValue.length)}
                        </textarea>
                        <span>{`${maxLength - textValue.length}/${maxLength}`}</span>
                        </div>
                    </div>
                    <button type="submit" className='j-add-p-btn'>Submit to Journal</button>
                </form>
                <div
            className="close"
            onClick={() => {
              popClick();
            }}
          >
            <img src={Close} alt="" />
          </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default Journal
