import {
  GET_USER_PROFILE,
  GET_USER_INFO,
  GET_ROUTINE,
  CREATE_NEW_NOTE,
  GET_USER_JOURNAL,
  EDIT_NOTE,
  DELETE_NOTE,
  SET_NOTE_CREATION,
  SET_CREATING_NEW_NOTE,
  RESET_NOTE_CREATION,
  SET_SELECTED_NOTE,
  SHIFT_PAGE,
  REQUEST_AUTH,
  GET_USER_MAIN
} from '../types';
import {
  getUserProfile,
  getUserInfoById,
  getRoutineByUserId,
  getUserMain
} from '../services/ProfileServices';
import {
  createNewNote,
  deleteNoteById,
  editNoteById,
  getJournalByUser
} from '../services/JournalServices';
import { requestGOAuth } from '../services/AuthServices';

export const GetUserMain = () => {
  return async (dispatch) => {
    const userMain = await getUserMain();

    dispatch({
      type: GET_USER_MAIN,
      payload: userMain
    });
  };
};

export const GetUserProfile = (userId) => {
  return async (dispatch) => {
    const userProfile = await getUserProfile(userId);

    dispatch({
      type: GET_USER_PROFILE,
      payload: userProfile
    });
  };
};

export const GetRoutineByUserId = (userId) => {
  return async (dispatch) => {
    const routine = await getRoutineByUserId(userId);

    dispatch({
      type: GET_ROUTINE,
      payload: routine
    });
  };
};

export const GetUserInfo = (userId) => {
  return async (dispatch) => {
    const userInfo = await getUserInfoById(userId);

    dispatch({
      type: GET_USER_INFO,
      payload: userInfo
    });
  };
};

export const CreateNewNote = (userId, noteInfo) => {
  return async (dispatch) => {
    const newNote = await createNewNote(userId, noteInfo);

    dispatch({
      type: CREATE_NEW_NOTE,
      payload: newNote
    });
  };
};

export const GetJournalByUser = (userId) => {
  return async (dispatch) => {
    const journal = await getJournalByUser(userId);

    dispatch({
      type: GET_USER_JOURNAL,
      payload: journal
    });
  };
};

export const EditNoteById = (noteId, noteIndex, noteInfo) => {
  return async (dispatch) => {
    const editedNote = await editNoteById(noteId, noteInfo);

    dispatch({
      type: EDIT_NOTE,
      payload: { noteIndex, editedNote }
    });
  };
};

export const DeleteNoteById = (noteIndex, noteId) => {
  return async (dispatch) => {
    await deleteNoteById(noteId);

    dispatch({
      type: DELETE_NOTE,
      payload: noteIndex
    });
  };
};

export const SetNoteCreation = (noteCreationInfo) => {
  return {
    type: SET_NOTE_CREATION,
    payload: noteCreationInfo
  };
};

export const ResetNoteCreation = () => {
  return {
    type: RESET_NOTE_CREATION
  };
};

export const SetCreatingNewNote = (creatingNewNote) => {
  return {
    type: SET_CREATING_NEW_NOTE,
    payload: creatingNewNote
  };
};

export const SetSelectedNote = (selectedNote) => {
  return {
    type: SET_SELECTED_NOTE,
    payload: selectedNote
  };
};

export const ShiftPage = (direction) => {
  return {
    type: SHIFT_PAGE,
    payload: direction
  };
};

export const RequestAuth = () => {
  return async (dispatch) => {
    const result = await requestGOAuth();
    console.log(result);

    dispatch({
      type: RequestAuth,
      payload: 'nothing'
    });
  };
};
