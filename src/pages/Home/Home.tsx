import React, { useEffect, useState } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import axios from 'axios';
import { apiKey } from '../../common/API/key/apiKeyMovie';
import movieApi from '../../common/API/MovieApi';

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const movieText = 'Harry'
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log(err)
            })
            console.log(response)
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;