import React, { useEffect, useState } from 'react';
import MovieListing from '../../components/EpisodeListing/EpisodeListing';
import axios from 'axios';
import { IEpisode } from '../../models/IEpisode';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEpisodes } from '../../store/slices/episodes/episodesFetch';

const Home = () => {
    const {episodes, error, isLoading} = useAppSelector(state => state.episodes)
    const [currentEpisodes, setCurrentEpisodes] = useState<IEpisode[]>([])
    const [selectedSeason, setSelectedSeason] = useState<number>(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [])

    useEffect(() => {
        filterEpisodes(selectedSeason)
    }, [episodes, selectedSeason])


    function filterEpisodes(season: number) {
        setCurrentEpisodes(episodes.filter(episode => parseInt(episode.season) === season))
        setSelectedSeason(season)
    }

    return (
        <>
            <MovieListing
                seasonsCount={5}
                currentSeason={selectedSeason}
                setSeason={filterEpisodes}
                episodes={currentEpisodes}
                error={error}
                isLoading={isLoading}
            />
        </>
    );
};

export default Home;