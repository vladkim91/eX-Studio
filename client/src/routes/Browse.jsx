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
  const [addDays, SetAddDays] = useState('date-h');
  const [showDesc, SetShowDesc] = useState(-1);

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
      SetPop('b-pop-show');
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

  const addRoutine = () =>{
    if (addDays === 'date-h') {
        SetAddDays('date-s')
    } else {
        SetAddDays('date-h')
    }
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
  let box = []
  for (let i = 0; i < 20; i++) {
      box.push(
        <div
        key={i}
        className="b-2c-card card"
        onClick={() => {
          popClick();
        }}
      >
        <img src={require('../assets/img/Saturday.jpg')} alt="" />
        <div className="blur"></div>
        <h1 className="b-3c-name">workout</h1>
      </div>
      )
      
  }

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
      <section className={`b-pop ${pop}`}>
      <div className="b-pop-card">
          <div className="popInfo">
            <div className="b-p-c-set">
                <span className='b-p-c-add' onClick={()=>addRoutine()}>Add routine</span>
              <h1>bicep reinforcement</h1>
            </div>
            <div className={`b-p-c-days ${addDays}`}>
                <div className='choose-days'>
                <span className="b-p-c-d-small">Sunday</span>
                <span className="b-p-c-d-small">Monday</span>
                <span className="b-p-c-d-small">Tuesday</span>
                <span className="b-p-c-d-small">Wednesday</span>
                <span className="b-p-c-d-small">Thursday</span>
                <span className="b-p-c-d-small">Friday</span>
                <span className="b-p-c-d-small">Saturday</span>
                </div>
                <div className='confirm-routine'>Confirm</div>
            </div>

              <div className="b-l-arr">
                {[...Array(5)].map((exercise, index) => (
                  <div key={index} className="b-l-ex" onClick={
                      ()=>{
                    //   displayDesc()
                      if (showDesc === index) {
                          SetShowDesc(-1)
                      }else{
                          SetShowDesc(index)
                      }
                      
                      }}>
                    <div className='b-l-ex-info' >
                    <span className="b-l-ex-num" >
                        {index + 1}.</span>
                    <p className="b-l-ex-name">thgerg</p>
                    <span className="b-l-time">02:00</span>
                  </div>
                  <div className={`b-l-ex-desc ${showDesc===index?"desc-s":"desc-h"}`}>
                  A military press, also known as an overhead press and a shoulder press, is a barbell strength training exercise that works muscle groups in the upper body like the triceps in your arms, the trapezius muscles in your upper back, and the deltoid muscles in your shoulders, including the anterior and medial delts.
                  </div>
                  </div>
                  
                ))}
              </div>
            <Link className="r-l-start-bttn" to="/">
              Start
            </Link>
          </div>
          <div className="close" onClick={() => {popClick();}}>
            <img src={Close} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
