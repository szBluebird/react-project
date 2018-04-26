
import {
    CHANGE_CHARACTER_NAME,
    LOAD_CHARACTER_DATA,
    LOAD_CHARACTER_DATA_SUCCESS,
    LOAD_CHARACTER_DATA_ERROR,
} from './constants';

/**
* Changes the input field of the form
* @param  {characterName} characterName The new text of the input field
* @return {object}    An action object with a type of CHANGE_CHARACTER_NAME
*/
export function changeCharacterName(characterName) {
    return {
        type: CHANGE_CHARACTER_NAME,
        characterName,
    };
}

/**
* Load the characted data, this action starts the request saga
* @return {object} An action object with a type of LOAD_CHARACTER_DATA
*/
export function loadCharacterData() {
    return {
        type: LOAD_CHARACTER_DATA,
    };
}

/**
* Dispatched when the repositories are loaded by the request saga
* @param  {array} characterData The repository data
* @param  {string} characterName The current character name
* @return {object}      An action object with a type of LOAD_CHARACTER_DATA_SUCCESS passing the characterData
*/
export function characterDataLoaded(characterData, characterName) {
    console.log("characterDataLoaded: " + characterData)
    console.log("characterName: " + characterName)
    return {
        type: LOAD_CHARACTER_DATA_SUCCESS,
        characterData,
        characterName,
    };
}

/**
* Dispatched when loading the character data fails
* @param  {object} error The error
* @return {object}       An action object with a type of LOAD_CHARACTER_DATA_ERROR passing the error
*/
export function characterDataLoadingError(error) {
    return {
        type: LOAD_CHARACTER_DATA_ERROR,
        error,
    };
}
