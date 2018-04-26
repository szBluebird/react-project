/**
* Gets the repositories of the user from Github
*/

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CHARACTER_DATA } from './constants';
import { characterDataLoaded, characterDataLoadingError } from './actions';

import request from 'utils/request';
import { makeSelectCharacterName } from './selectors';

/**
* Character data request/response handler
*/
export function* getCharacterData() {
    console.log("getCharacterData")
    // Select username from store
    const characterName = yield select(makeSelectCharacterName());
    const requestURL = `http://people.anarchy-online.com/character/bio/d/5/name/${characterName}/bio.xml?data_type=json`;
    console.log("requestURL: " + requestURL)
    try {
        // Call our request helper (see 'utils/request')
        const characterData = yield call(request, requestURL);
        if (characterData === null)
            throw new Error("Character not found")
        else
            yield put(characterDataLoaded(characterData, characterName));
    } catch (err) {
        console.log("err: " + err)
        yield put(characterDataLoadingError(err));
    }
}

/**
* Root saga manages watcher lifecycle
*/
export default function* characterData() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount
    yield takeLatest(LOAD_CHARACTER_DATA, getCharacterData);
}
