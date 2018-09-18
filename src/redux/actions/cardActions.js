import * as types from './actionTypes';

export const createNote = (noteData) => dispatch => {
    dispatch(createNoteRequest());

    setTimeout(() => {
        dispatch(createNoteSuccess(noteData));
    }, 0);
};

const createNoteRequest = () => ({
  type: types.CREATE_NOTE_REQUEST
});

const createNoteSuccess = (noteData) => ({
    type: types.CREATE_NOTE_SUCCESS,
    noteData
});

export const deleteNote = (noteId) => dispatch => {
    dispatch(deleteNoteRequest());

    setTimeout(() => {
        dispatch(deleteNoteSuccess(noteId));
    }, 0);
};

const deleteNoteRequest = () => ({
    type: types.DELETE_NOTE_REQUEST
});

const deleteNoteSuccess = (noteId) => ({
    type: types.DELETE_NOTE_SUCCESS,
    noteId
});

export const updateNote = (data) => (dispatch, getState) => {
    dispatch(updateNoteRequest());

    const { cardReducer: { noteData } } = getState();
    const { noteId, body, updated, title } = data;
    const currentNote = noteData.filter((note) => note.id === noteId);
    const allOtherNotes = noteData.filter((note) => note.id !== noteId);
    const updatedNoteData = [
        {
            ...currentNote[0],
            body,
            title,
            labels: [
                ...currentNote[0].labels,
            ],
            updated,
        },
        ...allOtherNotes
    ]

    setTimeout(() => {
        dispatch(updateNoteSuccess(updatedNoteData));
    }, 0);
}

const updateNoteRequest = () => ({
    type: types.UPDATE_NOTE_REQUEST
});

const updateNoteSuccess = (noteData) => ({
    type: types.UPDATE_NOTE_SUCCESS,
    noteData
});

export const createLocalLabel = (labels) => ({
    type: types.CREATE_LOCAL_LABEL,
    labels
});

export const deleteLocalLabel = (labelId) => ({
    type: types.DELETE_LOCAL_LABEL,
    labelId
});

export const updateLabel = (labelData) => (dispatch, getState) => {
    dispatch(updateLabelRequest());

    setTimeout(() => {
        const { cardReducer: { noteData } } = getState();
        const currentNote = noteData.filter((note) => note.id === labelData.noteId);
        const allOtherNotes = noteData.filter((note) => note.id !== labelData.noteId);
        // I agree, it's a bit complicated - will optimise this in v2
        const updatedNoteData = [
            {
                ...currentNote[0],
                labels: [
                    ...currentNote[0].labels,
                    {
                        id: Object.keys(currentNote[0].labels).length + 1,
                        name: labelData.name
                    },
                ],
                updated: labelData.updated,
            },
            ...allOtherNotes
        ]

        dispatch(updateLabelSuccess(updatedNoteData));
    }, 0);
}

const updateLabelRequest = () => ({
    type: types.UPDATE_LABEL_REQUEST
});

const updateLabelSuccess = (noteData) => ({
    type: types.UPDATE_LABEL_SUCCESS,
    noteData
});

export const deleteSavedNoteLabel = (labelData) => (dispatch, getState) => {
    dispatch(deleteSavedNoteLabelRequest());

    setTimeout(() => {
        const { cardReducer: { noteData } } = getState();
        const currentNote = noteData.filter((note) => note.id === labelData.noteId);
        const allOtherNotes = noteData.filter((note) => note.id !== labelData.noteId);
        // I agree, it's a bit complicated - will optimise this in v2
        const remainingLabels = currentNote[0].labels.filter((label) => label.id !== labelData.labelId);
        const updatedNoteData = [
            {
                ...currentNote[0],
                labels: remainingLabels,
                updated: labelData.updated,
            },
            ...allOtherNotes
        ];
        
        dispatch(deleteSavedNoteLabelSuccess(updatedNoteData));
    }, 0);
}

const deleteSavedNoteLabelSuccess = (noteData) => ({
    type: types.DELETE_SAVED_LABEL_SUCCESS,
    noteData
});

const deleteSavedNoteLabelRequest = () => ({
    type: types.DELETE_SAVED_LABEL_REQUEST
})

export const closeNotification = () => ({
    type: types.CLOSE_NOTIFICATION
});

export const sortCardsBy = (sortCardsBy) => ({
    type: types.SORT_CARDS,
    sortCardsBy: sortCardsBy
});


// export const filterCardsByLabel = (filterCardsByLabel) => ({
//     type: types.FILTER_CARDS,
//     filterCardsByLabel
// })