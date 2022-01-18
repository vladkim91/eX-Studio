import React, { useState, useEffect } from 'react';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { connect } from 'react-redux';
import { GetRoutineByUserId } from '../store/actions/ProfileActions';

const mapStateToProps = (state) => {
  return {
    routine: state.profileState.routine.scheduled_workouts || []
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getRoutineByUserId: (userId) => dispatch(GetRoutineByUserId(userId))
  };
};

function Routine({ routine, getRoutineByUserId }) {
  useEffect(() => {
    getRoutineByUserId(1);
  }, []);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const [pop, SetPop] = useState('pophide');
  const [scheduledWorkout, setScheduledWorkout] = useState({});

  const popClick = (scheduledWorkout) => {
    if (pop == 'pophide') {
      SetPop('');
      setScheduledWorkout(scheduledWorkout);
    } else {
      SetPop('pophide');
    }
  };

  let workouts = [...Array(7)];

  for (let i = 0; i < routine.length; i++) {
    workouts[routine[i].day] = routine[i].workout;
  }

  workouts = workouts.map((workout, index) => (
    <div
      key={index}
      className={'routine-cont-list r-1'}
      onClick={() => {
        popClick({ day: days[index], workout });
      }}
    >
      <img
        className="back"
        src={require(`../assets/img/${days[index]}.jpg`)}
        alt=""
      />
      <div className="blur r-blur"></div>
      <div className="float">
        <h1 className="r-name">{days[index]}</h1>
      </div>
    </div>
  ));

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav {...props} />
        <div className="routine-list">
          <section className="r-list">{workouts}</section>
        </div>
      </div>
      <section className={`popUp ${pop}`}>
        <div className="popCard">
          <div className="popInfo">
            <div className="r-l-day">
              <h1>{scheduledWorkout.day}</h1>
            </div>

            {scheduledWorkout.workout && (
              <>
                <div className="r-l-title">
                  <h1>
                    {scheduledWorkout?.workout?.name || 'No Workout Scheduled'}
                  </h1>
                </div>
                <div className="r-l-divider"></div>
                <div className="r-l-arr">
                  {scheduledWorkout.workout.exercises.map((exercise, index) => (
                    <div key={index} className="r-l-ex">
                      <span className="r-l-ex-num">{index + 1}.</span>
                      <p className="r-l-ex-name">{exercise.name}</p>
                      <span className="r-l-time">02:00</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            <Link
              to={'/training'}
              state={{ workout: scheduledWorkout.workout }}
              className="r-l-start-bttn"
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
      </section>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Routine);
