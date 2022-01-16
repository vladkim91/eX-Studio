import { GET_USER_INFO, GET_USER_JOURNAL } from '../types';

const iState = {
  userInfo: {
    username: '',
    first_name: '',
    last_name: ''
  },
  journal: []
};

const ProfileReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: { ...state.userInfo, ...action.payload.userInfo },
        journal: action.payload.userJournal
      };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
