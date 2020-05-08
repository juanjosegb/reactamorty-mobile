import axios from 'axios';

import {rickAndMortyApiConfig} from "@Environment/apiClients";
import {getNumberOfPages} from "@Utils/api";
import {IFilterCharacter} from "@Types/character";
import {FilterCharacterDefault} from "@Constants/characters";

const apiClient = axios.create({
    baseURL: rickAndMortyApiConfig.baseURL,
    timeout: rickAndMortyApiConfig.timeout
});
export const GetAllCharacters = async () => {
    let response = await apiClient.get(`character/`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`character`, numberOfPages);
};

export const GetCharactersByPage = (page: number = 1) => {
    return apiClient.get(`character/?page=${page}`);
};

export const GetFilteredCharacters = async (filter: IFilterCharacter = FilterCharacterDefault) => {
    let response = await apiClient.get(`character/?page=${filter.page}&name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`character/?page=${filter.page}&name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`, numberOfPages);
};

export const GetLocationsByPage = (page: number = 1) => {
    return apiClient.get(`location/?page=${page}`);
};

export const GetEpisodesByPage = (page: number = 1) => {
    return apiClient.get(`episode/?page=${page}`);
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