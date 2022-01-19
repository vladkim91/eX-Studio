import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import {
  LoadWorkoutsAndExercises,
  EditFilterParams
} from '../store/actions/BrowseActions';


const mapStateToProps = (state) => {
  return {
    workoutAndExercisesState: state.workoutAndExercisesState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    fetchWorkoutsAndExercises: (type, name, muscleGroup) =>
      dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup)),
    editFilterParams: (filter, value) =>
      dispatch(EditFilterParams(filter, value))
  };
};

const Browse = ({
  fetchWorkoutsAndExercises,
  workoutAndExercisesState,
  editFilterParams
}) => {
  useEffect(() => {
    fetchWorkoutsAndExercises(
      workoutAndExercisesState.filter.type,
      workoutAndExercisesState.filter.name,
      workoutAndExercisesState.filter.muscleGroup
    );
  }, []);
  const clickHandler = () => {
    editFilterParams('muscleGroup', 'ch');
  };
  let parts = ["All", "Back", "Chest", "Leg","Triceps"]
  let partBox = []
  for (let i = 0; i < parts.length; i++) {
      partBox.push(
          <button id={""}>{parts[i]}</button>
      )
      
  }



  let box2 = []
  for (let i = 1; i <= 20; i++) {
      box2.push(
          <div className="b-2c-card card">
          <img src={require('../assets/img/Saturday.jpg')} alt="" />
          <div className="blur"></div>
          <h1 className="b-3c-name">workout 2</h1>
      </div>
      )
  }
  return (
    // <div>
    //   <button onClick={clickHandler}>Update filter params state</button>
    // </div>
    <div className='home'>
            <SideBar />
            <div className="mainBody">
                <Nav />
                <div className="subnav">
                    <input type="text" placeholder='Search here'/>
                    <div className='s-filters'>
                        <div className="s-f-types">
                            <button id='s-f1-selected'>Exercise</button>
                            <button>Workout</button>
                        </div>
                        <div className="s-f-seperator"></div>
                        <div className="s-f-bodyParts">
                            {partBox}
                        </div>
                    </div>
                </div>
                <div className="browse-container">
                    <h2>Exercise</h2>
                    <div className="b-c-seperator"></div>
                    <div className="b-c-cards">
                        {box2}
                    </div>
                </div>
            </div>
            
        </div>
  );
};


export default connect(mapStateToProps, mapActionsToProps)(Browse);

