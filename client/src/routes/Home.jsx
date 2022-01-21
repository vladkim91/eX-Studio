import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
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
    props.getUserProfile(`cbdf9649-2c95-48c1-b761-ae5c71c3a0cc`);
  }, []);

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav {...props} />
        <Main {...props} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
