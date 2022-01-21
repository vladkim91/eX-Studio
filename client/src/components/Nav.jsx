import React, { useEffect } from 'react';
import Toggle from '../assets/switch.svg';
import Medal from '../assets/medal.png';
import User from '../assets/user.png';
import '../styles/Nav.css';
import { connect } from 'react-redux';
import { GetUserInfo } from '../store/actions/ProfileActions';
import { Link } from 'react-router-dom';
import Burger from '../assets/burger.svg';
import Closer from '../assets/close.svg';
import { useState } from 'react';

const mapStateToProps = (state) => {
  return {
    userInfo: state.profileState.userInfo
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getUserInfoById: (userId) => dispatch(GetUserInfo(userId))
  };
};

function Nav({ userInfo, getUserInfoById }) {
  useEffect(() => {
    getUserInfoById(1);
  }, []);

  const [openNav, SetOpenNav] = useState('sb2-ul-close')


  return (
    <div className="header">
      <nav>
        <div className="user">
          <div className="profile">
            <div className="p-pic">
              <img src={User} alt="" />
            </div>
            <h3 className="nav-text">{userInfo.username}</h3>
          </div>
          <div className="level">
            <h3 className="nav-text">LEVEL</h3>
            <div className="l-pic">
              <img src={Medal} alt="" />
            </div>
          </div>
        </div>
        <Link to={"/"}>
        <div className="title">
          <h2 className="t-top">EX</h2>
          <span className="t-mid">/</span>
          <h2 className="t-bottom">STUDIO</h2>
        </div>
          </Link>
        <div className="toggle">
          <img src={Toggle} alt="" />
        </div>
        <div className="sideBar2">
          <div className='sb2-ul'>
            <img src={Burger} alt="" onClick={()=>openNav==="sb2-ul-close"?SetOpenNav("sb2-ul-open"):SetOpenNav("sb2-ul-close")} />
          <div className={openNav}>
            <Link to={'/'}>Home</Link>
            <Link to={'/browse'}>Browse</Link>
            <Link to={'/journal'}>Journal</Link>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Nav);
