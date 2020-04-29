import {IFilterLocation, ILocationWithTotalPages} from "@Types/location";

import {
    FETCH_FILTERED_LOCATIONS,
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_DONE,
    FETCH_LOCATIONS_ERROR,
    FETCH_LOCATIONS_START
} from "@Store/constants/locations";

import {IReduxAction} from "..";

export const fetchLocationsStart = (): IReduxAction => {
    return {type: FETCH_LOCATIONS_START};
};

export const fetchLocations = (page: number): IReduxAction => {
    return {
        type: FETCH_LOCATIONS,
        payload: page
    };
};

export const fetchLocationsDone = (locations: ILocationWithTotalPages): IReduxAction => {
    return {type: FETCH_LOCATIONS_DONE, payload: locations};
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