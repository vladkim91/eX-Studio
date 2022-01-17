import { GET_USER_PROFILE } from '../types';
import { getUserProfile } from '../services/ProfileServices';

export const GetUserProfile = (userId) => {
  return async (dispatch) => {
    const userProfile = await getUserProfile;

    dispatch({
      type: GET_USER_PROFILE,
      payload: userProfile
    });
  };
};
