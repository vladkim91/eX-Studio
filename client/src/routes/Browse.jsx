import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Close from '../assets/close.svg';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import {
  LoadWorkoutsAndExercises,
  EditFilterParams
} from '../store/actions/BrowseActions';
import { Link } from 'react-router-dom';

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
  const [pop, SetPop] = useState('pophide');
  const [body, setBody] = useState(null);

  useEffect(() => {
    fetchWorkoutsAndExercises(
      workoutAndExercisesState.filter.type,
      workoutAndExercisesState.filter.name,
      workoutAndExercisesState.filter.muscleGroup
    );

    if (!body) {
      setBody(document.body);
    } else {
      body.style.overflow = pop === 'pophide' ? 'scroll' : 'hidden';
    }
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);
  const clickHandler = () => {
    editFilterParams('muscleGroup', 'ch');
  };

  const popClick = () => {
    if (pop === 'pophide') {
      SetPop('');
      if (body) {
        body.style.overflow = 'hidden';
      }
    } else {
      SetPop('pophide');
      if (body) {
        body.style.overflow = 'scroll';
      }
    }
  };

  let parts = ['All', 'Back', 'Chest', 'Leg', 'Triceps'];
  let partBox = [];
  for (let i = 0; i < parts.length; i++) {
    partBox.push(<button id={''}>{parts[i]}</button>);
  }

  let box2 = [];
  for (let i = 1; i <= 20; i++) {
    box2.push(
      <div
        className="b-2c-card card"
        onClick={() => {
          popClick();
        }}
      >
        <img src={require('../assets/img/Saturday.jpg')} alt="" />
        <div className="blur"></div>
        <h1 className="b-3c-name">workout 2</h1>
      </div>
    );
  }
  return (
    // <div>
    //   <button onClick={clickHandler}>Update filter params state</button>
    // </div>
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav />
        <div className="subnav">
          <input type="text" placeholder="Search here" />
          <div className="s-filters">
            <div className="s-f-types">
              <button id="s-f1-selected">Exercise</button>
              <button>Workout</button>
            </div>
            <div className="s-f-seperator"></div>
            <div className="s-f-bodyParts">{partBox}</div>
          </div>
        </div>
        <div className="browse-container">
          <h2>Exercise</h2>
          <div className="b-c-seperator"></div>
          <div className="b-c-cards">{box2}</div>
        </div>
      </div>
      <section className={`popUp ${pop}`}>
        <div className="popCard">
          <div className="popInfo">
            <div className="r-l-day">
              <h1>Tuesday</h1>
            </div>
            <>
              <div className="r-l-title">
                <h1>Exercise</h1>
              </div>
              <div className="r-l-divider"></div>
              <div className="r-l-arr">
                {[...Array(5)].map((exercise, index) => (
                  <div key={index} className="r-l-ex">
                    <span className="r-l-ex-num">{index + 1}.</span>
                    <p className="r-l-ex-name">{exercise?.name}</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                ))}
              </div>
            </>
            <Link className="r-l-start-bttn" to="/">
              Start
            </Link>
          </div>
          <div
            className="close"
            onClick={() => {
              popClick();
            }}
          >
            <img src={Close} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
