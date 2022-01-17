import React, { useState } from 'react';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { useLocation } from 'react-router-dom';

function Routine() {
  const location = useLocation();
  const profileState = location.state.profileState;
  const routine = profileState.routine;

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

  // for (let day = 0; day < 7; day++) {
  //   workouts.push(
  //     <div
  //       key={day}
  //       className={`routine-cont-list r-${j}`}
  //       onClick={() => {
  //         popClick(days[day]);
  //       }}
  //     >
  //       <img
  //         className="back"
  //         src={require(`../assets/img/${days[day]}.jpg`)}
  //         alt=""
  //       />
  //       <div className="blur r-blur"></div>
  //       <div className="float">
  //         <h1 className="r-name">{days[day]}</h1>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav profileState={profileState} />
        <div className="routine-list">
          <section className="r-list">{workouts}</section>
        </div>
      </div>
      <section className={`popUp ${pop}`}>
        <div className="popCard">
          <div className="popInfo">
            <div className="r-l-day">
              <h1>
                {scheduledWorkout?.workout?.name || 'No Workout Scheduled'}
              </h1>
            </div>

            {scheduledWorkout.workout && (
              <>
                <div className="r-l-title">
                  <h1>Bootcamp</h1>
                </div>
                <div className="r-l-divider"></div>
                <div className="r-l-arr">
                  <div className="r-l-ex">
                    {scheduledWorkout.workout.map((exercise, index) => (
                      <div key={index}>
                        <span className="r-l-ex-num">{index}.</span>
                        <p className="r-l-ex-name">{exercise.name}</p>
                        <span className="r-l-time">02:00</span>
                      </div>
                    ))}
                  </div>
                  {/* <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div>
                  <div className="r-l-ex">
                    <span className="r-l-ex-num">1.</span>
                    <p className="r-l-ex-name">Bench Press</p>
                    <span className="r-l-time">02:00</span>
                  </div> */}
                </div>
              </>
            )}
            <Link to={'/training'} className="r-l-start-bttn">
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

export default Routine;
