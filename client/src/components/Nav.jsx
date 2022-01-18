import React, { useEffect } from 'react';
import Toggle from '../assets/switch.svg';
import Medal from '../assets/medal.png';
import User from '../assets/user.png';
import '../styles/Nav.css';
import { connect } from 'react-redux';
import { GetUserInfo } from '../store/actions/ProfileActions';
import { Link } from 'react-router-dom';

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
      </nav>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Nav);
