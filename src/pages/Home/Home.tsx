import React, { useEffect, useState } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import axios from 'axios';
import { apiKey } from '../../common/API/key/apiKeyMovie';
import { fetchMovies } from '../../common/API/MovieApi';

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // fetchMovies()
    }, [])

    return (
        <section className='section'>
            <div className="container">
                <MovieListing />
            </div>
        </section>
    );
};

export default Home;