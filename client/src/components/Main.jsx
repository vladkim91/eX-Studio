import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.svg';
import { connect } from 'react-redux';
import { LoadWorkoutsAndExercises } from '../store/actions/BrowseActions';

const mapStateToProps = (state) => {
  return {
    workoutAndExercises: state.workoutAndExercisesState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loadWorkoutsAndExercises: () =>
      dispatch(LoadWorkoutsAndExercises('workouts', '', ''))
  };
};

function Main({ profileState, loadWorkoutsAndExercises, workoutAndExercises }) {
  useEffect(() => {
    loadWorkoutsAndExercises();
  }, []);

  const getRandom3Workouts = () => {
    let maxAttempts = 50;
    const random3Workouts = new Set();
    while (random3Workouts.size < 3 && maxAttempts) {
      random3Workouts.add(
        workoutAndExercises.workoutsAndExercises[
          Math.floor(
            Math.random() * workoutAndExercises.workoutsAndExercises.length
          )
        ]
      );
      maxAttempts--;
    }
    return Array.from(random3Workouts.values());
  };

  const random3Workouts = getRandom3Workouts() || [];

  return (
    <div>
      <section className="startW">
        <Link
          to="/training"
          state={{
            workout: profileState?.routine?.scheduled_workouts?.find(
              (scheduled_workout) => {
                return scheduled_workout.day === new Date(Date.now()).getDay();
              }
            )?.workout || { added_exercises: [] },
            something: 'foo'
          }}
        >
          <button> Start Today's Workout</button>
        </Link>
      </section>
      <section className="carrousel">
        <div className="arrow l-arrow">
          <img src={Arrow} alt="" />
        </div>
        <div className="carrousel-container">
          {random3Workouts.map((workout, index) => (
            <div key={index} className={`card c${index + 1}`}>
              <div className="blur"></div>
              <h1 className="w-name">{workout?.name}</h1>
            </div>
          ))}
        </div>
        <div className="arrow r-arrow">
          <img src={Arrow} alt="" />
        </div>
      </section>
      <section className="routine">
        <div className="routine-container">
          <div className="blur r-blur"></div>
          <Link to="/routine" style={{ all: 'none' }}>
            <h1 className="r-name">My routine</h1>
          </Link>
        </div>
      </section>
      <section className="journal">
        <div className="journal-container">
          {profileState.journal.map((note, index) => (
            <div key={index} className={`entry`}>
              <p className="time">
                {new Date(note.createdAt)
                  .toLocaleDateString(undefined, {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  })
                  .replace(',', ' - ')}
              </p>
              <p className="j-title">{note.title}</p>
              <p className="set">2 hours</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Main);
