import { GET_USER_INFO, GET_USER_JOURNAL } from '../styles';

const iState = {
  user: {
    username: '',
    first_name: '',
    last_name: ''
  },
  journal: []
};

const ProfileReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, user: { ...state.user, ...action.payload } };
    case GET_USER_JOURNAL:
      return { ...state, journal: action.payload };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
