import {
    CREATE_NOTE_SUCCESS,
    CREATE_NOTE_REQUEST,
    CREATE_LOCAL_LABEL,
    DELETE_LOCAL_LABEL,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_REQUEST,
    UPDATE_LABEL_REQUEST,
    UPDATE_LABEL_SUCCESS,
    UPDATE_NOTE_REQUEST,
    UPDATE_NOTE_SUCCESS,
    CLOSE_NOTIFICATION,
    SORT_CARDS,
    DELETE_SAVED_LABEL_REQUEST,
    DELETE_SAVED_LABEL_SUCCESS,
} from '../actions/actionTypes';
import initialState from './initialState';
import { sortObjectByKey } from '../../utils/sort';

export default (
    state = initialState, 
    { 
        type, 
        noteData, 
        labels, 
        noteId, 
        labelId,
        sortCardsBy,
        // filterCardsByLabel
    }
) => {
    switch (type) {
        case CREATE_NOTE_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case CREATE_NOTE_SUCCESS:
            return Object.assign({}, state, { 
                noteData, 
                labels: [],
                showSavedNotification: true
            });
        case DELETE_NOTE_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case DELETE_NOTE_SUCCESS:
            return Object.assign({}, state, {
                noteData: state.noteData.filter((note) => {
                    return note.id !== noteId
                }),
                loading: false
            });
        case CREATE_LOCAL_LABEL:
            return Object.assign({}, state, { labels });
        case DELETE_LOCAL_LABEL:
            return Object.assign({}, state, { 
                labels: state.labels.filter((label) => {
                    return label.id !== labelId
                })
             });
        case UPDATE_LABEL_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case UPDATE_LABEL_SUCCESS:
            return Object.assign({}, state, { 
                noteData,
                isLoading: false 
            });
        case UPDATE_NOTE_REQUEST:
            return Object.assign({}, state, {isLoading: true});
        case UPDATE_NOTE_SUCCESS:
            return Object.assign({}, state, { 
                noteData, 
                isLoading: false,
                showSavedNotification: true
             });
        case CLOSE_NOTIFICATION:
            return Object.assign({}, state, { 
                showSavedNotification: false
             });
        case SORT_CARDS:
            const noteDataToSort = [...state.noteData];
            //The sort is not necessarily stable. 
            //The default sort order is according to string Unicode code points.
            const sortedNotes = noteDataToSort.sort(sortObjectByKey(sortCardsBy));
            return Object.assign({}, state, { 
                noteData: sortedNotes,
                sortCardsBy
            });
        case DELETE_SAVED_LABEL_REQUEST:
            return Object.assign({}, state, {});
        case DELETE_SAVED_LABEL_SUCCESS:
            return Object.assign({}, state, {noteData});
        // case FILTER_CARDS:
            // //TODO
            // let filteredCards = [];
            // for (let card of state.noteData) {
            //     if (card.labels.length && filterCardsByLabel) {
            //         for (let labels of card.labels) {
            //             if (labels.name === filterCardsByLabel) {
            //                 filteredCards.push({
            //                     ...card,
            //                     visible: true
            //                 });
            //             }
            //             else {
            //                 filteredCards.push({
            //                     ...card,
            //                     visible: false
            //                 });
            //             }
            //         }
            //     } else {
            //         filteredCards.push({
            //             ...card,
            //             visible: true
            //         });
            //     }
            // }

            // return Object.assign({}, state, {
            //     noteData: filteredCards
            // });
        default:
            return state;
    }
};