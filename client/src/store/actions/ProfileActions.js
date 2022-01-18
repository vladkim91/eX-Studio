import { GET_USER_PROFILE, GET_USER_INFO } from '../types';
import { getUserProfile, getUserInfoById } from '../services/ProfileServices';

export const GetUserProfile = (userId) => {
  return async (dispatch) => {
    const userProfile = await getUserProfile(userId);

    dispatch({
      type: GET_USER_PROFILE,
      payload: userProfile
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
