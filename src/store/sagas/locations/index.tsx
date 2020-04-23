import {all, call, put, takeLatest} from 'redux-saga/effects';

import {GetAllLocations, GetFilteredLocations} from "@ApiClients/RickAndMorty";
import {IReduxAction} from "@Store/actions";
import {fetchLocationsCache, fetchLocationsDone, fetchLocationsError} from '@Store/actions/locations';
import {FETCH_FILTERED_LOCATIONS, FETCH_LOCATIONS} from "@Store/constants/locations";
import {responseToLocations} from "@Utils/mappers/responseToLocations";
import {checkDateIsDeprecated} from "@Utils/date";

import {ILocation} from "@Types/location";

function* fetchLocationsAsync(action: IReduxAction) {
    try {
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.locations.length === 0)) {
            const results: ILocation[] = yield call(GetAllLocations);
            yield put(fetchLocationsDone(responseToLocations(results)))
        } else {
            yield put(fetchLocationsCache(action.payload.locations))
        }
    } catch (error) {
        yield put(fetchLocationsError());
    }
}

function* fetchFilteredLocationsAsync(action: IReduxAction) {
    try {
        const results: ILocation[] = yield call(GetFilteredLocations, action.payload);
        yield put(fetchLocationsDone(responseToLocations(results)))
    } catch (error) {
        yield put(fetchLocationsError());
    }
}


export default function* locationsSaga() {
    yield all([
        yield takeLatest(FETCH_LOCATIONS, fetchLocationsAsync),
        yield takeLatest(FETCH_FILTERED_LOCATIONS, fetchFilteredLocationsAsync)]
    );
}