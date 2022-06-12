import React, { useEffect, useState } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import axios from 'axios';
import { IEpisode } from '../../models/IEpisode';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEpisodes } from '../../store/slices/episodes/episodesFetch';

const Home = () => {
    const {episodes, error, isLoading} = useAppSelector(state => state.episodes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [])

    return (
        <>
            <MovieListing 
                episodes={episodes}
                error={error}
                isLoading={isLoading}
            />
        </>
    );
};

export default Home;