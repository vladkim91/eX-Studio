import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandImg from '../assets/img/landing.jpg';
import Curve from '../assets/curve.svg';

function Landing() {
  return (
    <div>
      <section className="intro">
        <img className="l-i-back" src={LandImg} alt="" />
        <header>
          <Link to={'/'}>Home</Link>
          <Link to={'about'}>About</Link>
          <Link to={'/sign'}>Sign In/Up</Link>
        </header>
        <div className="banner">
          <div className="l-title">
            <h1 className="l-t-top">EX</h1>
            <span className="l-t-mid">/</span>
            <h1 className="l-t-bottom">STUDIO</h1>
          </div>
        </div>
        {/* <img className="curve" src={Curve} alt="" /> */}
      </section>
    </div>
  );
}

export default Landing;
