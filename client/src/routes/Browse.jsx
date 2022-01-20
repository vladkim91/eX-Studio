import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Close from '../assets/close.svg';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import {
  LoadWorkoutsAndExercises,
  EditFilterParams,
  ScheduleWorkout
} from '../store/actions/BrowseActions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    workoutAndExercisesState: state.workoutAndExercisesState, userInfo: state.profileState.userInfo
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    scheduleWorkout: (userId, routineIn, day) => dispatch(ScheduleWorkout(userId, routineIn, day))
    ,
    fetchWorkoutsAndExercises: (type, name, muscleGroup) =>
      dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup)),
    editFilterParams: (filter, value) =>
      dispatch(EditFilterParams(filter, value))
  };
};

const Browse = ({
  fetchWorkoutsAndExercises,
  workoutAndExercisesState,
  editFilterParams,
  userInfo,
  scheduleWorkout
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
  }, [workoutAndExercisesState.filter]);



  const addMuscleGroup = (muscleGroup) => {
    editFilterParams({
      ...workoutAndExercisesState.filter,
      muscleGroup: workoutAndExercisesState.filter.muscleGroup + muscleGroup
    });
  };

  const removeMuscleGroup = (muscleGroup) => {
    editFilterParams({
      ...workoutAndExercisesState.filter,
      muscleGroup: workoutAndExercisesState.filter.muscleGroup.replace(
        muscleGroup,
        ''
      )
    });
  };

  const setFilterName = (newName) => {
    editFilterParams({
      ...workoutAndExercisesState.filter,
      name: newName
    });
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
    const dayOfTheWeek = new Date().getDay()
    const user = 1;
    const routineId = user;

    const addWorkoutToRoutine =() => {
      scheduleWorkout(user, workoutId, dayOfTheWeek)
      console.log(userInfo);
      // create data table with current workout id as routine id and 
      
    }

  let parts = [
    { fullName: 'All', acronym: 'bk ch lg tc sh fb ab bc ' },
    { fullName: 'Back', acronym: 'bk ' },
    { fullName: 'Chest', acronym: 'ch ' },
    { fullName: 'Leg', acronym: 'lg ' },
    { fullName: 'Tricep', acronym: 'tc ' },
    { fullName: 'Shoulder', acronym: 'sh ' },
    { fullName: 'FullBody', acronym: 'fb ' },
    { fullName: 'Abs', acronym: 'ab ' },
    { fullName: 'Bicep', acronym: 'bc ' }
  ];
  let partBox = [];
  for (let i = 0; i < parts.length; i++) {
    partBox.push(
      <button
        className={
          workoutAndExercisesState.filter.muscleGroup.indexOf(
            parts[i].acronym
          ) !== -1 ||
          workoutAndExercisesState.filter.muscleGroup.length ===
            parts[0].acronym.length
            ? 's-f1-selected'
            : ''
        }
        key={i}
        onClick={() => {
          if (!i) {
            if (workoutAndExercisesState.filter.muscleGroup.length) {
              editFilterParams({
                ...workoutAndExercisesState.filter,
                muscleGroup: ''
              });
            } else {
              editFilterParams({
                ...workoutAndExercisesState.filter,
                muscleGroup: parts[0].acronym
              });
            }
          } else if (
            workoutAndExercisesState.filter.muscleGroup.indexOf(
              parts[i].acronym
            ) !== -1
          ) {
            removeMuscleGroup(parts[i].acronym);
          } else {
            addMuscleGroup(parts[i].acronym);
          }
        }}
      >
        {parts[i].fullName}
      </button>
    );
  }

  let workoutsOrExercises = workoutAndExercisesState.workoutsAndExercises || [];
  workoutsOrExercises = workoutsOrExercises.map((e, index) => (
    <div
      key={index}
      className="b-2c-card card"
      onClick={() => {
        popClick();
        
      }}
    >
      <img src={require('../assets/img/Saturday.jpg')} alt="" />
      <div className="blur"></div>
      <h1 className="b-3c-name">{e.name}</h1>
    </div>
  ));

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav />
        <div className="subnav">
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setFilterName(e.target.value.toLowerCase());
            }}
          />
          <div className="s-filters">
            <div className="s-f-types">
              <button
                className={
                  workoutAndExercisesState.filter.type === 'workouts'
                    ? 's-f1-selected'
                    : ''
                }
                onClick={() => {
                  editFilterParams({
                    ...workoutAndExercisesState.filter,
                    type: 'workouts'
                  });
                }}
              >
                Workout
              </button>
              <button
                className={
                  workoutAndExercisesState.filter.type === 'exercises'
                    ? 's-f1-selected'
                    : ''
                }
                onClick={() => {
                  editFilterParams({
                    ...workoutAndExercisesState.filter,
                    type: 'exercises'
                  });
                }}
              >
                Exercise
              </button>
            </div>
            <div className="s-f-seperator"></div>
            <div className="s-f-bodyParts">{partBox}</div>
          </div>
        </div>
        <div className="browse-container">
          <h2>Exercise</h2>
          <div className="b-c-seperator"></div>
          <div className="b-c-cards">{workoutsOrExercises}</div>
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
              <button onClick={() => {
                addWorkoutToRoutine()
              }}>Button</button>
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
