import { GET_USER_PROFILE } from '../types';
import { getUserProfile } from '../services/ProfileServices';

export const GetUserProfile = (userId) => {
  return async (dispatch) => {
    const userProfile = await getUserProfile(userId);

    dispatch({
      type: GET_USER_PROFILE,
      payload: userProfile
    });
  };
};
