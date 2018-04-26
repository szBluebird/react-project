import { fromJS } from 'immutable';

import {
    CHANGE_CHARACTER_NAME,
    LOAD_CHARACTER_DATA_SUCCESS,
    LOAD_CHARACTER_DATA,
    LOAD_CHARACTER_DATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    characterName: '',
    loading: false,
    error: false,
    currentUser: false,
    character: {
        data: false,
    },
    organization: {
        data: false,
    },
    date: '',
});

function characterSearchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHARACTER_NAME:
            return state
                .set('characterName', action.characterName);
        case LOAD_CHARACTER_DATA:
            return state
                .set('loading', true)
                .set('error', false)
                .setIn(['character', 'data'], false)
                .setIn(['organization', 'data'], false)
                .set('date', '');
        case LOAD_CHARACTER_DATA_SUCCESS:
            let character = action.characterData[0];
            let organization = action.characterData[1];
            let date = action.characterData[2];
            return state
                .setIn(['character', 'data'], character)
                .setIn(['organization', 'data'], organization)
                .set('date', date)
                .set('loading', false)
                .set('currentUser', action.characterName);
        case LOAD_CHARACTER_DATA_ERROR:
            return state
                .set('error', action.error)
                .set('loading', false);
        default:
            return state;
    }
}

export default characterSearchReducer;
