import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IEpisode } from '../../models/IEpisode';
import './EpisodeCard.scss';
import image from '../../assets/card-image.jpg'

interface MovieCardProps {
    episode: IEpisode
}

const EpisodeCard: FC<MovieCardProps> = ({episode}) => {
    return (
        <div  
            className='item-listing'
        >
            <Link 
                to={`/episode/${episode.episode_id}`}
                className='item-listing__image' 
            >
                <img src={image} alt="card" />
            </Link>
            <div className="item-listing__info">
                <div className='item-listing__title'>
                    <span>Эпизод №{episode.episode}: </span>
                    <p>{episode.title}</p>
                </div>
                <p>Дата выхода: {episode.air_date}</p>
                <Link 
                    to={`/episode/${episode.episode_id}`}
                    className='item-listing__btn-more' 
                >
                    Подробнее
                </Link>
            </div>
            
        </div>
    );
};

export default EpisodeCard;