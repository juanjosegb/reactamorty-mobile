import axios from 'axios';

import {rickAndMortyApiConfig} from "@Environment/apiClients";
import {getNumberOfPages} from "@Utils/api";
import {IFilterCharacter} from "@Types/character";
import {FilterCharacterDefault} from "@Constants/characters";
import {IFilterEpisode} from "@Types/episode";
import {FilterEpisodeDefault} from "@Constants/episodes";
import {FilterLocationDefault} from "@Constants/locations";
import {IFilterLocation} from "@Types/location";

const apiClient = axios.create({
    baseURL: rickAndMortyApiConfig.baseURL,
    timeout: rickAndMortyApiConfig.timeout
});

//Characters
export const GetAllCharacters = async () => {
    let response = await apiClient.get(`character/`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`character`, numberOfPages);
};

export const GetAllCharactersByPage = (page: number = 1) => {
    return apiClient.get(`character/?page=${page}`);
};

export const GetCharacters = (ids: any[] = []) => {
    return apiClient.get(`character/${ids}`);
};

export const GetFilteredCharacters = (filter: IFilterCharacter = FilterCharacterDefault) => {
    return apiClient.get(`character/?page=${filter.page}&name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`);
};

//Locations
export const GetAllLocations = async () => {
    let response = await apiClient.get(`location/`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`location`, numberOfPages);
};

export const GetLocations = async (ids: any[] = []) => {
    let response = await apiClient.get(`location/${ids}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`location/${ids}`, numberOfPages);
};

export const GetFilteredLocations = async (filter: IFilterLocation = FilterLocationDefault) => {
    let response = await apiClient.get(`location/?name=${filter.name}&type=${filter.type}&dimension=${filter.dimension}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`location/?name=${filter.name}&type=${filter.type}&dimension=${filter.dimension}`, numberOfPages);
};

//Episodes
export const GetAllEpisodes = async () => {
    let response = await apiClient.get(`episode/`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/`, numberOfPages);
};

export const GetEpisodes = async (ids: any[] = []) => {
    let response = await apiClient.get(`episode/${ids}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/${ids}`, numberOfPages);
};

export const GetFilteredEpisodes = async (filter: IFilterEpisode = FilterEpisodeDefault) => {
    let response = await apiClient.get(`episode/?episode=${filter.episode}&name=${filter.name}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/?episode=${filter.episode}&name=${filter.name}`, numberOfPages);
};

export const GetDataByPage = (page: number, url: string) => {
    return url.indexOf("?") !== -1 ?
        apiClient.get(`${url}&page=${page}`) :
        apiClient.get(`${url}/?page=${page}`);
};

export const concatPages = async (url: string, numberOfPages: number) => {
    let allTopics = [];
    for (let i = 1; i < numberOfPages + 1; ++i) {
        let page = await GetDataByPage(i, url);
        allTopics.push(...page.data.results)
    }
    return allTopics;
};