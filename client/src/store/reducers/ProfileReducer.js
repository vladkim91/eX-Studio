import {
  GET_USER_INFO,
  GET_USER_PROFILE,
  GET_USER_JOURNAL,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_ROUTINE,
  SET_NOTE_CREATION,
  SET_CREATING_NEW_NOTE
} from '../types';

const iState = {
  userInfo: {
    username: '',
    first_name: '',
    last_name: ''
  },
  journal: [],
  routine: [],
  noteCreation: {
    title: '',
    text: '',
    felt: 0
  },
  creatingNewNote: false
};

const ProfileReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case GET_ROUTINE:
      return { ...state, routine: action.payload };
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
    case CREATE_NEW_NOTE:
      return { ...state, journal: [...state.journal, action.payload] };
    case GET_USER_JOURNAL:
      return { ...state, journal: action.payload };
    case EDIT_NOTE:
      const newJournal = [...state.journal];
      newJournal[action.payload.noteIndex] = action.payload.editedNote;
      return { ...state, journal: newJournal };
    case DELETE_NOTE:
      const smallerJournal = [...state.journal];
      smallerJournal.splice(action.payload.noteIndex + 1, 1);
      return { ...state, journal: smallerJournal };
    case SET_NOTE_CREATION:
      return {
        ...state,
        noteCreation: { ...state.noteCreation, ...action.payload }
      };
    case SET_CREATING_NEW_NOTE:
      return {
        ...state,
        creatingNewNote: action.payload
      };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
