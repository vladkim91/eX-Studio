import React, { useEffect } from 'react';
import Nav from './Nav';
import Main from './Main';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { GetUserProfile } from '../store/actions/ProfileActions';

const mapStateToProps = (state) => {
  return {
    profileState: state.profileState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(GetUserProfile(userId))
  };
};

function Home(props) {
  useEffect(() => {
    props.getUserProfile(1);
  }, []);

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav />
        <Main {...props} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
