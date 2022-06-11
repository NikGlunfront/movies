import axios from 'axios';
import {apiKey} from './key/apiKeyMovie'; 

const fetchUrl = axios.create({
    baseURL: 'https://breakingbadapi.com'
})

export const fetchMovies = async () => {
    try {
        const response = await fetchUrl.get(`/api/episodes?series=Breaking+Bad`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

