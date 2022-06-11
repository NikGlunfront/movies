import React, { useEffect, useState } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import axios from 'axios';
import { apiKey } from '../../common/API/key/apiKeyMovie';
import { fetchEpisodes, IEpisode } from '../../common/API/EpisodesApi';

const Home = () => {
    const [episodes, setEpisodes] = useState<IEpisode[]>([] as IEpisode[])

    useEffect(() => {
        fetchEpisodes()
    }, [])

    return (
        <>
            <MovieListing />
        </>
    );
};

export default Home;