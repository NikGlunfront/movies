import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { IEpisode } from '../../models/IEpisode';
import ActorItem from '../ActorItem/ActorItem';
import Row from '../Containers/Row/Row';
import Section from '../Containers/Section/Section';
import Spinner from '../Spinner/Spinner';
import './EpisodeDetails.scss';
import episodeImage from '../../assets/card-image.jpg';

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
        <Section>
            <span>{error}</span>
        </Section>
    }

    return (
        <Section className='details'>
            <div className="details__content">
                <img src={episodeImage} alt="episode" className='details__img' />
                <p><strong>Сезон {currentEpisode.season}. Эпизод №{currentEpisode.episode}</strong></p>
                <p><strong>Название:</strong> {currentEpisode.title}</p>
                <p><strong>Дата выхода:</strong> {currentEpisode.air_date}</p>
            </div>
            <div className='details__actors'>
                <p>Список актеров:</p>
                <Row className='details__actors-row'>
                    {currentEpisode.characters.map((actor, index) =>
                        <ActorItem 
                            actor={actor} 
                            key={index} 
                        />
                    )}
                </Row>
            </div>
        </Section>
    );
};

export default EpisodeDetails;