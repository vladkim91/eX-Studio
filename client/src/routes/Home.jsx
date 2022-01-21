import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import { connect } from 'react-redux';
import { GetUserMain } from '../store/actions/ProfileActions';

const mapStateToProps = (state) => {
  return {
    profileState: state.profileState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getUserMain: () => dispatch(GetUserMain())
  };
};

function Home(props) {
  useEffect(() => {
    props.getUserMain();
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
