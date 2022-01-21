import React, { useState, useEffect, Children } from 'react';
import { connect } from 'react-redux';
import Close from '../assets/close.svg';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import {
  LoadWorkoutsAndExercises,
  EditFilterParams,
  ScheduleWorkout,
  EditScheduleWorkout,
  DeleteScheduledWorkout,
  GetWorkoutById
} from '../store/actions/BrowseActions';
import { GetRoutineByUserId } from '../store/actions/ProfileActions';

import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    workoutAndExercisesState: state.workoutAndExercisesState,
    userInfo: state.profileState.userInfo,
    routine: state.profileState.routine
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    editScheduleWorkout: (userId, workoutId, day) =>
      dispatch(EditScheduleWorkout(userId, workoutId, day)),
    fetchWorkoutsAndExercises: (type, name, muscleGroup) =>
      dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup)),
    editFilterParams: (filter, value) =>
      dispatch(EditFilterParams(filter, value)),
    scheduleWorkout: (newSchedule) => dispatch(ScheduleWorkout(newSchedule)),
    getRoutineByUserId: (userId) => dispatch(GetRoutineByUserId(userId)),
    deleteScheduledWorkout: (userId, day) =>
      dispatch(DeleteScheduledWorkout(userId, day)),
    getWorkoutById: (id) => dispatch(GetWorkoutById(id))
  };
};

const Browse = ({
  fetchWorkoutsAndExercises,
  workoutAndExercisesState,
  editFilterParams,
  userInfo,
  scheduleWorkout,
  editScheduleWorkout,
  getRoutineByUserId,
  routine,
  deleteScheduledWorkout,
  getWorkoutById
}) => {
  const [pop, SetPop] = useState('pophide');
  const [body, setBody] = useState(null);
  const [addDays, SetAddDays] = useState('date-h');
  const [showDesc, SetShowDesc] = useState(-1);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [daySelected, setDaySelected] = useState(-1);

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

  const addWorkoutToRoutine = () => {
    const scheduledWorkouts = routine.scheduled_workouts;
    scheduledWorkouts.forEach((scheduledWorkout, i) => {
      if (scheduledWorkout.day === workoutAndExercisesState.schedule.day) {
        alert(
          `workout already scheduled for ${workoutAndExercisesState.schedule.day}`
        );
        deleteScheduledWorkout(
          userInfo.id,
          workoutAndExercisesState.schedule.day
        );
      }
    });
    scheduleWorkout(workoutAndExercisesState.schedule);
  };

  const addRoutine = () => {
    if (addDays === 'date-h') {
      SetAddDays('date-s');
    } else {
      SetAddDays('date-h');
    }
  };
  let days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];
let currentDay;
const chooseDay = (e) => {
    console.log(e.target.id)
    console.log(e.target.className)
    switch (e.target.innerText) {
      
      case 'sunday':
        currentDay = 0;
        break;
      case 'monday':
        currentDay = 1;
        break;
      case 'tuesday':
        currentDay = 2;
        break;
      case 'wednesday':
        currentDay = 3;
        break;
      case 'thursday':
        currentDay = 4;
        break;
        case 'friday':
            currentDay = 5;
            break;
            case 'saturday':
          currentDay = 6;
          console.log(e.target.id)
          console.log(e.target.className)
        break;
      default:
        currentDay = null;
    }
    console.log(currentDay)
    editScheduleWorkout(userInfo.id, currentWorkout.id, currentDay);
  };

  const daysArray = [];

  for (let i = 0; i < days.length; i++) {

    daysArray.push(
      <span id={i} className={`b-p-c-d-small ${daySelected === i?'small1':""}`} onClick={
          (e)=>{
          chooseDay(e);
          if (daySelected === i) {
              setDaySelected(-1)
            }else{
              setDaySelected(i)

          }
      }} key={i}>
        {days[i]}
      </span>
    );
  }

  let parts = [
    { fullName: 'All', acronym: 'bk ch lg tc sh fb ab bc ' },
    { fullName: 'Back', acronym: 'bk ' },
    { fullName: 'Chest', acronym: 'ch ' },
    { fullName: 'Leg', acronym: 'lg ' },
    { fullName: 'Tricep', acronym: 'tr ' },
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
        getRoutineByUserId(userInfo.id);
        if (workoutAndExercisesState.filter.type === 'workouts') {
          setCurrentWorkout(e);
        } else {
          setCurrentExercise(e);
        }
        getWorkoutById(e.id);
      }}
    >
      <img src={require('../assets/img/Saturday.jpg')} alt="" />
      <div className="blur"></div>
      <h1 className="b-3c-name">{e.name}</h1>
    </div>
  ));
  let box = [];
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
    );
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
          {workoutAndExercisesState.filter.type === 'workouts' ? (
            <h2>Workouts</h2>
          ) : (
            <h2>Exercises</h2>
          )}
          <div className="b-c-seperator"></div>
          <div className="b-c-cards">{workoutsOrExercises}</div>
        </div>
      </div>
      <section className={`b-pop ${pop}`}>
        {(workoutAndExercisesState.filter.type === 'workouts'
          ? currentWorkout
          : currentExercise) && (
          <div className="b-pop-card">
            <div className="popInfo">
              <div className="b-p-c-set">
                {workoutAndExercisesState.filter.type === 'workouts' ? (
                  <span className="b-p-c-add" onClick={() => addRoutine()}>
                    Add to routine
                  </span>
                ) : <span></span>}
                {workoutAndExercisesState.filter.type === 'workouts' ? (
                  <h1>{currentWorkout.name}</h1>
                ) : (
                  <h1>{currentExercise.name}</h1>
                )}
              </div>
              {workoutAndExercisesState.filter.type === 'workouts' ? (
              <div className={`b-p-c-days ${addDays}`}>
                <div className="choose-days">{daysArray}</div>
                {/* <Link to="/routine"> */}
                <div className="confirm-routine" onClick={addWorkoutToRoutine}>
                  Confirm
                </div>
                {/* </Link> */}
              </div>):(<div></div>)}
              {workoutAndExercisesState.filter.type === 'workouts' ? (
                <div className="b-l-arr">
                  {currentWorkout.added_exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="b-l-ex"
                      onClick={() => {
                        //   displayDesc()
                        if (showDesc === index) {
                          SetShowDesc(-1);
                        } else {
                          SetShowDesc(index);
                        }
                      }}
                    >
                      <div className="b-l-ex-info">
                        <span className="b-l-ex-num">{index + 1}.</span>
                        <p className="b-l-ex-name">{exercise.name}</p>
                        {exercise.time ? (
                          <span className="b-l-time">{exercise.time} sec</span>
                        ) : (
                          <span className="b-l-time">{exercise.sets} sets</span>
                        )}
                      </div>
                      <div
                        className={`b-l-ex-desc ${
                          showDesc === index ? 'desc-s' : 'desc-h'
                        }`}
                      >
                        {exercise.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='b-l-ex-desc2'>
                  <img className='b-l-ex-desc2-img' src={currentExercise.image} alt="" />
                  <div className="b-l-ex-desc2-info">
                  {currentExercise.description}
                  </div>
                </div>
              )}
            <Link
                className="r-l-start-bttn"
                to="/training"
                
              >
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
        )}
      </section>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
