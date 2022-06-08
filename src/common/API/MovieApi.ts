import axios from 'axios';

export default axios.create({
    baseURL: 'http://img.omdbapi.com'
})