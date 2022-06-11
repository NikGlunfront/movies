import axios, { AxiosResponse } from 'axios';
import {apiKey} from './key/apiKeyMovie'; 

const fetchUrl = axios.create({
    baseURL: 'https://breakingbadapi.com'
})

export interface IEpisode {
    air_date: string,
    characters: string[],
    episode: string,
    episode_id: number,
    season: string,
    series: string,
    title: string,
}

export const fetchEpisodes = async ()  => {
    const response = await fetchUrl.get<IEpisode[]>(`/api/episodes?series=Breaking+Bad`)
    console.log(response.data)
}

