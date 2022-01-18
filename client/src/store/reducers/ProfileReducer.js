import { GET_USER_INFO, GET_USER_PROFILE, GET_USER_JOURNAL } from '../types';

const iState = {
  userInfo: {
    username: '',
    first_name: '',
    last_name: ''
  },
  journal: [],
  routine: []
};

const ProfileReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case GET_USER_PROFILE:
      const userInfo = {
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name
      };
      const userJournal = action.payload.journal.notes;
      const userRoutine = action.payload.routine.scheduled_workouts;

      return {
        ...state,
        userInfo: { ...state.userInfo, ...userInfo },
        journal: userJournal,
        routine: userRoutine
      };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
