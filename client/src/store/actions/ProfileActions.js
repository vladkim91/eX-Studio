import { GET_USER_PROFILE, GET_USER_INFO, GET_ROUTINE } from '../types';
import {
  getUserProfile,
  getUserInfoById,
  getRoutineByUserId
} from '../services/ProfileServices';

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
