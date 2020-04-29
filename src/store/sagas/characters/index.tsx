import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ICharacter} from '@Types/character';

import {IReduxAction} from "@Store/actions";
import {fetchAllCharactersDone, fetchCharactersDone, fetchCharactersError} from '@Store/actions/characters';
import {FETCH_ALL_CHARACTERS, FETCH_CHARACTERS, FETCH_FILTERED_CHARACTERS} from '@Store/constants/characters';
import {GetAllCharacters, GetCharactersByPage, GetFilteredCharacters} from "@ApiClients/RickAndMorty";

function* fetchCharactersByPageAsync(action: IReduxAction) {
    try {
        const response: any = yield call(GetCharactersByPage, action.payload);
        yield put(fetchCharactersDone({results: response.data.results, pages: response.data.info.pages}));
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

function* fetchAllCharactersAsync() {
    try {
        const results: ICharacter[] = yield call(GetAllCharacters);
        yield put(fetchAllCharactersDone(results));
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

function* fetchFilteredCharactersAsync(action: IReduxAction) {
    try {
        const response: any = yield call(GetFilteredCharacters, action.payload);
        yield put(fetchCharactersDone({results: response.data.results, pages: response.data.info.pages}));
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

export default function* charactersSaga() {
    yield all([
        yield takeLatest(FETCH_CHARACTERS, fetchCharactersByPageAsync),
        yield takeLatest(FETCH_ALL_CHARACTERS, fetchAllCharactersAsync),
        yield takeLatest(FETCH_FILTERED_CHARACTERS, fetchFilteredCharactersAsync)]
    )
}