import { GET_USER_PROFILE, GET_USER_JOURNAL } from '../types';
import { getUserById } from '../services/ProfileServices';
import { getJournalByUser } from '../services/JournalServices';

export const GetUserProfile = (userId) => {
  return async (dispatch) => {
    const userInfo = await getUserById(userId);
    const userJournal = await getJournalByUser(userId);

    dispatch({
      type: GET_USER_PROFILE,
      payload: { userInfo, userJournal }
    });
  };
};
