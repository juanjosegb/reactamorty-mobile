import {all, call, put, takeLatest} from 'redux-saga/effects';
import {IReduxAction} from "@Store/actions";
import {fetchLocationsDone, fetchLocationsError} from '@Store/actions/locations';
import {FETCH_LOCATIONS} from "@Store/constants/locations";
import {GetLocationsByPage} from "@ApiClients/RickAndMorty";

function* fetchLocationsByPageAsync(action: IReduxAction) {
    try {
        const response: any = yield call(GetLocationsByPage, action.payload);
        yield put(fetchLocationsDone({results: response.data.results, pages: response.data.info.pages}));
    } catch (error) {
        yield put(fetchLocationsError());
    }
}


export default function* locationsSaga() {
    yield all([
        yield takeLatest(FETCH_LOCATIONS, fetchLocationsByPageAsync)]
    );
}