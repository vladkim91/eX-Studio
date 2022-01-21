import React, { useState, useEffect } from 'react';
import GoogleIcon from '../assets/google.png';
import FacebookIcon from '../assets/facebook.png';
import { connect } from 'react-redux';
import { RequestAuth } from '../store/actions/ProfileActions';

const mapActionsToProps = (dispatch) => {
  return {
    requestAuth: () => dispatch(RequestAuth())
  };
};

function SignUp({ requestAuth }) {
   return (
    <div className="signup">
      <div className="s-u-card">
        <h3>New here?</h3>
        <h1>Join or sign in using other services</h1>
        <div className="s-u-o o-google" onClick={() => {}}>
          <img src={GoogleIcon} alt="" />
          <h4>Continue with Google</h4>
        </div>
        <div className="s-u-o o-facebook">
          <img src={FacebookIcon} alt="" />
          <h4>Continue with Facebook</h4>
        </div>
        <div className="s-u-google-o"></div>
        <div
          id="g_id_onload"
          data-client_id="51263313881-7oolcs1ckh8ovfn6fuqql2du7f11c37u.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="redirect"
          data-login_uri="http://localhost:3001/api/sign"
          data-auto_prompt="false"
        ></div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
        {/* <div className="g_id_signout">Sign Out</div> */}
      </div>
    </div>
  );
}

export default connect(null, mapActionsToProps)(SignUp);
