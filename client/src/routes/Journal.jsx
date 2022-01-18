import React, { useState, useEffect } from 'react';
import Add from '../assets/add.svg';
import Delete from '../assets/delete.svg';
import Edit from '../assets/edit.svg';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { connect } from 'react-redux';
import {
  GetJournalByUser,
  SetNoteCreation,
  CreateNewNote,
  EditNoteById,
  DeleteNoteById,
  SetCreatingNewNote,
  ResetNoteCreation,
  SetSelectedNote
} from '../store/actions/ProfileActions';

const mapStateToProps = (state) => {
  return {
    journal: state.profileState.journal,
    noteCreation: state.profileState.noteCreation,
    creatingNewNote: state.profileState.creatingNewNote,
    selectedNote: state.profileState.selectedNote
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getJournal: (userId) => dispatch(GetJournalByUser(userId)),
    setNoteCreation: (noteCreationInfo) =>
      dispatch(SetNoteCreation(noteCreationInfo)),
    createNewNote: (userId, noteInfo) =>
      dispatch(CreateNewNote(userId, noteInfo)),
    editNoteById: (noteId, noteIndex, noteInfo) =>
      dispatch(EditNoteById(noteId, noteIndex, noteInfo)),
    deleteNoteById: (noteIndex, noteId) =>
      dispatch(DeleteNoteById(noteIndex, noteId)),
    setCreatingNewNote: (creatingNewNote) =>
      dispatch(SetCreatingNewNote(creatingNewNote)),
    resetNoteCreation: () => dispatch(ResetNoteCreation()),
    setSelectedNote: (selectedNote) => dispatch(SetSelectedNote(selectedNote))
  };
};

function Journal({
  journal,
  noteCreation,
  setNoteCreation,
  getJournal,
  createNewNote,
  editNoteById,
  deleteNoteById,
  setCreatingNewNote,
  creatingNewNote,
  resetNoteCreation,
  setSelectedNote,
  selectedNote
}) {
  let maxLength = 1000;
  const [edit, setEdit] = useState('pophide');
  const [deleteP, setDeleteP] = useState('pophide');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getJournal(1);
  }, []);

  const handleChange = (e) => {
    setNoteCreation({
      ...noteCreation,
      text: e.target.value
    });
  };

  const editPopClick = () => {
    if (edit == 'pophide') {
      setEdit('edit-show');
    } else {
      setEdit('pophide');
      setCreatingNewNote(false);
    }
  };
  const deletePopClick = () => {
    if (deleteP == 'pophide') {
      setDeleteP('delete-show');
    } else {
      setDeleteP('pophide');
    }
  };

  return (
    <div className="home">
      <SideBar />
      <div className="mainBody">
        <Nav />
        <h1 className="j-name">My Journal</h1>
        <section className="journal">
          <h3 className="j-cont-name">Choose Journal page to view</h3>
          <div className="journal-container">
            <div
              className="j-cont-add"
              onClick={() => {
                resetNoteCreation();
                setIsEditing(true);
                setCreatingNewNote(true);
              }}
            >
              <img src={Add} alt="" />
            </div>
            {journal.map((note, index) => (
              <div
                key={index}
                className={`entry ${
                  selectedNote === index ? 'selected-entry' : ''
                }`}
                onClick={() => {
                  setSelectedNote(index);
                }}
              >
                <p className="time">
                  {new Date(note.createdAt).toLocaleDateString(undefined, {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  })}
                </p>
                <p className="j-title">{note.title}</p>
                <p className="set">2 hours</p>
              </div>
            ))}
          </div>
        </section>
        <section className={`pop-deletion ${deleteP}`}>
          <div className="deletion">
            <p className="deletion-text">
              Are You sure you want to delete this from journal
            </p>
            <div className="d-decision">
              <button
                className="d-d-btn y-delete"
                onClick={() => {
                  deletePopClick();
                  deleteNoteById(selectedNote, journal[selectedNote].id);
                }}
              >
                Delete
              </button>
              <button
                className="d-d-btn n-delete"
                onClick={() => deletePopClick()}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
        {(journal.length > 0 || creatingNewNote) && (
          <section className="j-page">
            {!isEditing && (
              <div className="edit">
                <span className="edit-btn" onClick={() => editPopClick()}>
                  ...
                </span>
                <div className={`edit-dropd ${edit}`}>
                  <div
                    className="edit-dd dd1"
                    onClick={() => {
                      editPopClick();
                      setIsEditing(true);
                      setNoteCreation({
                        title: journal[selectedNote]?.title,
                        text: journal[selectedNote]?.text
                      });
                    }}
                  >
                    <img src={Edit} alt="" /> <p>Edit Page</p>
                  </div>
                  <div
                    className="edit-dd dd2"
                    onClick={() => {
                      editPopClick();
                      deletePopClick();
                    }}
                  >
                    <img src={Delete} alt="" />
                    <p>Delete page</p>
                  </div>
                </div>
              </div>
            )}
            {!isEditing ? (
              <h1 className="j-p-title">
                {journal[selectedNote]?.title || null}
              </h1>
            ) : (
              <input
                type="text"
                className="j-p-title"
                placeholder="Page Title"
                value={noteCreation.title}
                onChange={(e) => {
                  setNoteCreation({
                    ...noteCreation,
                    title: e.target.value
                  });
                }}
              />
            )}
            <h4 className="j-p-date">
              {journal[selectedNote] &&
                new Date(journal[selectedNote].createdAt).toLocaleDateString(
                  undefined,
                  {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  }
                )}
            </h4>
            <div className="separate-j-page"></div>
            {!isEditing ? (
              <p className="j-p-content">
                {journal[selectedNote]?.text || null}
              </p>
            ) : (
              <div className="j-add-p-textarea">
                <textarea
                  name=""
                  id=""
                  maxLength={maxLength}
                  placeholder={`Enter note... Limit ${maxLength} characters`}
                  value={noteCreation.text}
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <span>{`${
                  maxLength - noteCreation.text.length
                }/${maxLength}`}</span>
              </div>
            )}
            {isEditing && (
              <div className="btn-submit">
                <button
                  type="submit"
                  className="j-add-p-btn btn-save"
                  onClick={() => {
                    setIsEditing(false);

                    if (!creatingNewNote) {
                      editNoteById(
                        journal[selectedNote].id,
                        selectedNote,
                        noteCreation
                      );
                    } else {
                      createNewNote(1, noteCreation);
                      setCreatingNewNote(false);
                    }
                  }}
                >
                  {!creatingNewNote ? 'Save' : 'Create'}
                </button>
                <button
                  type=""
                  className="j-add-p-btn btn-cancel"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(Journal);
