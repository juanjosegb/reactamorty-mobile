import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ICharacter} from '@Types/character';

import {IReduxAction} from "@Store/actions";
import {fetchCharactersCache, fetchCharactersDone, fetchCharactersError} from '@Store/actions/characters';
import {FETCH_CHARACTERS, FETCH_FILTERED_CHARACTERS} from '@Store/constants/characters';
import {GetAllCharacters, GetFilteredCharacters} from "@ApiClients/RickAndMorty";
import {checkDateIsDeprecated} from "@Utils/date";
import {responseToCharacters} from "@Utils/mappers/responseToCharacters";

function* fetchCharactersAsync(action: IReduxAction) {
    try {
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.characters.length === 0)) {
            const results: ICharacter[] = yield call(GetAllCharacters);
            yield put(fetchCharactersDone(responseToCharacters(results)));
        } else {
            yield put(fetchCharactersCache(action.payload.characters))
        }
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

function* fetchFilteredCharactersAsync(action: IReduxAction) {
    try {
        const results: ICharacter[] = yield call(GetFilteredCharacters, action.payload);
        yield put(fetchCharactersDone(responseToCharacters(results)));
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

export default function* charactersSaga() {
    yield all([
        yield takeLatest(FETCH_CHARACTERS, fetchCharactersAsync),
        yield takeLatest(FETCH_FILTERED_CHARACTERS, fetchFilteredCharactersAsync)]
    )
}