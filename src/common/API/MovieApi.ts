import axios from 'axios';
import {apiKey} from './key/apiKeyMovie'; 

const fetchUrl = axios.create({
    baseURL: 'http://img.omdbapi.com'
})

const movieText = 'Harry'

export const fetchMovies = async () => {
    try {
        const response = await fetchUrl.get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

