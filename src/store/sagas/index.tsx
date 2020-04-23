import {all} from 'redux-saga/effects';

import episodesSaga from "@Store/sagas/episodes";
import locationsSaga from '@Store/sagas/locations';
import charactersSaga from "@Store/sagas/characters";

export default function* rootSaga() {
    yield all([
        charactersSaga(),
        locationsSaga(),
        episodesSaga(),
        //TODO: INCLUDE CHARACTERS SAGA
    ])
}