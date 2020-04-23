import {combineReducers} from "redux";
import {historyReducer} from "./history";
import {locationsReducer} from "./locations";
import {episodesReducer} from "@Store/reducers/episodes";
import {charactersReducer} from "@Store/reducers/characters";

export const rootReducer = combineReducers(
    {
        historyState: historyReducer,
        charactersState: charactersReducer,
        locationsState: locationsReducer,
        episodesState: episodesReducer
    }
);

export type RootState = ReturnType<typeof rootReducer>