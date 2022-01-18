import Client from '.';

export const createNewNote = async (userId, noteInfo) => {
  const result = await Client.post(`/journal/${userId}/notes`, noteInfo);
  return result.data;
};

export const getJournalByUser = async (userId) => {
  const result = await Client.get(`journal/${userId}?noteLimit=5`);
  return result.data;
};

export const editNoteById = async (noteInfo) => {
  const result = await Client.put(`journal/notes/${noteInfo.noteId}`, noteInfo);
  return result.data;
};

export const deleteNoteById = async (noteId) => {
  const result = await Client.delete(`journal/notes/${noteId}`);
  return result.data;
};
