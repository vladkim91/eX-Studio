import React from 'react';
import Toggle from '../assets/switch.svg';
import Medal from '../assets/medal.png';
import User from '../assets/user.png';
import '../styles/Nav.css';

function Nav({ profileState }) {
  return (
    <div className="header">
      <nav>
        <div className="user">
          <div className="profile">
            <div className="p-pic">
              <img src={User} alt="" />
            </div>
            <h3 className="nav-text"></h3>
          </div>
          <div className="level">
            <h3 className="nav-text">LEVEL</h3>
            <div className="l-pic">
              <img src={Medal} alt="" />
            </div>
          </div>
        </div>
        <div className="title">
          <h2 className="t-top">EX</h2>
          <span className="t-mid">/</span>
          <h2 className="t-bottom">STUDIO</h2>
        </div>
        <div className="toggle">
          <img src={Toggle} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
