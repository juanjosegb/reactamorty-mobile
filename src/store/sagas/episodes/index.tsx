import {all, call, put, takeLatest} from 'redux-saga/effects';

import {GetAllEpisodes, GetFilteredEpisodes} from "@ApiClients/RickAndMorty";
import {IReduxAction} from "@Store/actions";
import {fetchEpisodesCache, fetchEpisodesDone, fetchEpisodesError} from '@Store/actions/episodes';
import {FETCH_EPISODES, FETCH_FILTERED_EPISODES} from "@Store/constants/episodes";
import {responseToEpisodes} from "@Utils//mappers/responseToEpisodes";
import {checkDateIsDeprecated} from "@Utils/date";

import {IEpisode} from "@Types/episode";

function* fetchEpisodesAsync(action: IReduxAction) {
    try {
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.episodes.length === 0)) {
            const results: IEpisode[] = yield call(GetAllEpisodes);
            yield put(fetchEpisodesDone(responseToEpisodes(results)));
        } else {
            yield put(fetchEpisodesCache(action.payload.episodes))
        }
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}

function* fetchFilteredEpisodesAsync(action: IReduxAction) {
    try {
        const results: IEpisode[] = yield call(GetFilteredEpisodes, action.payload);
        yield put(fetchEpisodesDone(responseToEpisodes(results)));
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}


export default function* episodesSaga() {
    yield all([
        yield takeLatest(FETCH_EPISODES, fetchEpisodesAsync),
        yield takeLatest(FETCH_FILTERED_EPISODES, fetchFilteredEpisodesAsync)]
    );
}