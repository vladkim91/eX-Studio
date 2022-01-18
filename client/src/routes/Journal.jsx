import React, { useState } from 'react'
import Close from '../assets/close.svg';
import Add from '../assets/add.svg';
import Delete from '../assets/delete.svg';
import Edit from '../assets/edit.svg'
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';

function Journal() {
    let maxLength = 1000
    let [textValue, SetTextValue] = useState('')
    const [edit, setEdit] = useState('pophide');
    const [deleteP, setDeleteP] = useState('pophide');
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) =>{
        SetTextValue(e.target.value)
    }

    const editPopClick = () => {
        if (edit == 'pophide') {
          setEdit('edit-show')
        } else {
          setEdit('pophide')
        }
    };
    const deletePopClick = () => {
        if (deleteP == 'pophide') {
          setDeleteP('delete-show')
        } else {
            setDeleteP('pophide')
        }
    };

    return (
        <div className='home'>
            <SideBar />
            <div className="mainBody">
                <Nav />
                <h1 className="j-name">My Journal</h1>
                <section className="journal">
                    <h3 className="j-cont-name">Choose Journal page to view</h3>
                <div className="journal-container">
                    <div className='j-cont-add' onClick={()=>{setIsEditing(true)}}>
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
                <section className={`pop-deletion ${deleteP}`}>
                    <div className="deletion">
                    <p className='deletion-text'>Are You sure you want to delete this from journal</p>
                    <div className="d-decision">
                        <button className='d-d-btn y-delete' onClick={()=>deletePopClick()}>Delete</button>
                        <button className='d-d-btn n-delete' onClick={()=>deletePopClick()}>Cancel</button>
                    </div>
                    </div>
                    
                </section>
                <section className='j-page'>
                    {!isEditing && <div className="edit">
                        <span className="edit-btn" onClick={()=>editPopClick()}>...</span>
                        <div className={`edit-dropd ${edit}`}>
                            <div className='edit-dd dd1' onClick={()=>{editPopClick(); setIsEditing(true)}}><img src={Edit} alt="" /> <p>Edit Page</p></div>
                            <div className='edit-dd dd2' onClick={()=>{editPopClick(); deletePopClick()}}><img src={Delete} alt="" /><p>Delete page</p></div>
                        </div>
                    </div>}
                    {!isEditing ? 
                    <h1 className="j-p-title">Journal title</h1>
                    :
                    <input type="text" className="j-p-title" placeholder='Page Title'/>
                    }
                    <h4 className="j-p-date">January 15, 2022</h4>
                <div className="separate-j-page"></div>
                {!isEditing ? <p className='j-p-content'>
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
                :
                <div className='j-add-p-textarea'>
                        <textarea name="" id=""  maxLength={maxLength} placeholder={`Enter note... Limit ${maxLength} characters`}
                        value={textValue} onChange={(e)=>handleChange(e)}>
                        </textarea>
                        <span>{`${maxLength - textValue.length}/${maxLength}`}</span>
                    </div>}
                    {isEditing && 
                    <div className="btn-submit">
                            <button type="submit" className='j-add-p-btn btn-save' onClick={()=>setIsEditing(false)}>Save</button>
                            <button type="" className='j-add-p-btn btn-cancel' onClick={()=>setIsEditing(false)}>Cancel</button>
                    </div>}
                </section>
            
            </div>
        </div>
    )
}

export default Journal
