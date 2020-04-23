import {IFilterLocation, ILocation} from "@Types/location";

import {
    FETCH_FILTERED_LOCATIONS,
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_CACHE,
    FETCH_LOCATIONS_DONE,
    FETCH_LOCATIONS_ERROR
} from "@Store/constants/locations";
import {ILocationState} from "@Store/reducers/locations";

import {IReduxAction} from "..";

export const fetchLocations = (state: ILocationState): IReduxAction => {
    return {
        type: FETCH_LOCATIONS,
        payload: state
    };
};

export const fetchLocationsDone = (locations: ILocation[]): IReduxAction => {
    return {type: FETCH_LOCATIONS_DONE, payload: locations};
};

export const fetchLocationsCache = (locations: ILocation[]): IReduxAction => {
    return {
        type: FETCH_LOCATIONS_CACHE,
        payload: locations
    }
};

export const fetchLocationsError = (): IReduxAction => {
    return {type: FETCH_LOCATIONS_ERROR};
};

export const fetchFilteredLocations = (filter: IFilterLocation): IReduxAction => {
    return {
        type: FETCH_FILTERED_LOCATIONS,
        payload: filter
    };
};