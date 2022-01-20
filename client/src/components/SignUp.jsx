import React from 'react';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
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
        <div
          className="s-u-o o-google"
          onClick={() => {
            requestAuth();
          }}
        >
          <img src={Google} alt="" />
          <h4>Continue with Google</h4>
        </div>
        <div className="s-u-o o-facebook">
          <img src={Facebook} alt="" />
          <h4>Continue with Facebook</h4>
        </div>
        <div className="s-u-google-o"></div>
      </div>
    </div>
  );
}

export default connect(null, mapActionsToProps)(SignUp);
