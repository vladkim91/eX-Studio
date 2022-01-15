import { GET_USER_INFO, GET_USER_JOURNAL } from '../types';
import { getUserById } from '../services/ProfileServices';
import { getJournalByUser } from '../services/JournalServices';

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const userInfo = await getUserById(userId);
    const userJournal = await getJournalByUser(userId);

    dispatch({
      type: GET_USER_INFO,
      payload: { userInfo, userJournal }
    });
  };
};
