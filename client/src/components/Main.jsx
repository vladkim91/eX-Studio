import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.svg';

function Main({ profileState }) {
  return (
    <div>
      <section className="startW">
        <Link to={"/training"}>
        <button > Start Today's Workout</button>
        </Link>
      </section>
      <section className="carrousel">
        <div className="arrow l-arrow">
          <img src={Arrow} alt="" />
        </div>
        <div className="carrousel-container">
          <div className="card c1">
            <div className="blur"></div>
            <h1 className="w-name">Lorem, ipsum.</h1>
          </div>
          <div className="card c2">
            <div className="blur"></div>
            <h1 className="w-name">Lorem, ipsum.</h1>
          </div>
          <div className="card c3">
            <div className="blur"></div>
            <h1 className="w-name">Lorem, ipsum.</h1>
          </div>
        </div>
        <div className="arrow r-arrow">
          <img src={Arrow} alt="" />
        </div>
      </section>
      <section className="routine">
        <div className="routine-container">
          <div className="blur r-blur"></div>
          <Link to="/routine" style={{ all: 'none' }}>
            <h1 className="r-name">My routine</h1>
          </Link>
        </div>
      </section>
      <section className="journal">
        <div className="journal-container">
          {profileState.journal.map((note, index) => (
            <div key={index} className={`entry`}>
              <p className="time">
                {new Date(note.createdAt)
                  .toLocaleDateString(undefined, {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  })
                  .replace(',', ' - ')}
              </p>
              <p className="j-title">{note.title}</p>
              <p className="set">2 hours</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Main;
