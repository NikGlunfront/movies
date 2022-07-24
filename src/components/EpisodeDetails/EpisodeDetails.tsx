import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { IEpisode } from '../../models/IEpisode';
import Section from '../Containers/Section';
import Spinner from '../Spinner/Spinner';
import './EpisodeDetails.scss';

const EpisodeDetails = () => {
    const {episodeID} = useParams()
    const {episodes, error, isLoading} = useAppSelector(state => state.episodes)
    const [isSpinnerLoading, setIsSpinnerLoading] = useState<boolean>(true)
    let currentEpisode = episodes.filter(episode => episodeID && episode.episode_id === parseInt(episodeID))[0]

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setIsSpinnerLoading(isLoading)
            }, 1000);
        }
    }, [isLoading])


    if (!currentEpisode || isSpinnerLoading) {
        return (
            <section className='section details'>
                <Spinner width={200} />
            </section>
        )
    }

    if (error) {
        <section className='section details'>
            <div className="container">
                <span>error</span>
            </div>
        </section>
    }

    return (
        <Section className='details'>
            <div className="details__content">
                <span><strong>Сезон {currentEpisode.season}. Эпизод №{currentEpisode.episode}</strong></span>
                <span>{currentEpisode.title}</span>
                <div className='details__actors'>
                    <span>Список актеров:</span>
                    {currentEpisode.characters.map((actor, index) =>
                        <div key={index} className='actor-item'>
                            {actor}
                        </div>    
                    )}
                </div>
            </div>
        </Section>
    );
};

export default EpisodeDetails;