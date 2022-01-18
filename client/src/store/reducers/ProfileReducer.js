import {
  GET_USER_INFO,
  GET_USER_PROFILE,
  GET_USER_JOURNAL,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_ROUTINE,
  SET_NOTE_CREATION,
  SET_CREATING_NEW_NOTE,
  RESET_NOTE_CREATION,
  SET_SELECTED_NOTE
} from '../types';

const iState = {
  userInfo: {
    username: '',
    first_name: '',
    last_name: ''
  },
  journal: [],
  journalPage: 0,
  journalPageRange: 5,
  routine: [],
  noteCreation: {
    title: '',
    text: '',
    felt: 0
  },
  creatingNewNote: false,
  selectedNote: 0
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
      const addedNoteJournal = [...state.journal];
      addedNoteJournal.unshift(action.payload);

      return { ...state, journal: addedNoteJournal, selectedNote: 0 };
    case GET_USER_JOURNAL:
      return { ...state, journal: action.payload };
    case EDIT_NOTE:
      const newJournal = [...state.journal];
      newJournal[action.payload.noteIndex] = action.payload.editedNote;
      return { ...state, journal: newJournal };
    case DELETE_NOTE:
      const smallerJournal = [...state.journal];
      smallerJournal.splice(action.payload, 1);

      let newSelectedNote = state.selectedNote;
      if (newSelectedNote > 0) {
        newSelectedNote--;
      }

      return {
        ...state,
        journal: smallerJournal,
        selectedNote: newSelectedNote
      };
    case SET_NOTE_CREATION:
      return {
        ...state,
        noteCreation: { ...state.noteCreation, ...action.payload }
      };
    case RESET_NOTE_CREATION:
      return { ...state, noteCreation: { ...iState.noteCreation } };
    case SET_CREATING_NEW_NOTE:
      return {
        ...state,
        creatingNewNote: action.payload,
        noteCreation: { ...iState.noteCreation }
      };
    case SET_SELECTED_NOTE:
      return { ...state, selectedNote: action.payload };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
