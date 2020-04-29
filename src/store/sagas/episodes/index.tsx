import {all, call, put, takeLatest} from 'redux-saga/effects';
import {GetEpisodesByPage} from "@ApiClients/RickAndMorty";
import {IReduxAction} from "@Store/actions";
import {fetchEpisodesDone, fetchEpisodesError} from '@Store/actions/episodes';
import {FETCH_EPISODES} from "@Store/constants/episodes";

function* fetchEpisodesByPageAsync(action: IReduxAction) {
    try {
        const response: any = yield call(GetEpisodesByPage, action.payload);
        yield put(fetchEpisodesDone({results: response.data.results, pages: response.data.info.pages}));
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}

export default function* episodesSaga() {
    yield all([
        yield takeLatest(FETCH_EPISODES, fetchEpisodesByPageAsync)]
    );
}