import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IEpisode } from '../../models/IEpisode';
import './MovieCard.scss';
import image from '../../assets/card-image.jpg'

interface MovieCardProps {
    episode: IEpisode
}

const MovieCard: FC<MovieCardProps> = ({episode}) => {
    return (
        <div  
            className='item-listing'
        >
            <Link 
                to={`/movie/${episode.episode_id}`}
                className='item-listing__image' 
            >
                <img src={image} alt="card" />
            </Link>
            <div className="item-listing__info">
                <div className='item-listing__title'>
                    <span>Episode №{episode.episode}: </span>
                    <p>{episode.title}</p>
                </div>
                <p>Release date: {episode.air_date}</p>
                <Link 
                    to={`/movie/${episode.episode_id}`}
                    className='item-listing__btn-more' 
                >
                    Подробнее
                </Link>
            </div>
            
        </div>
    );
};

export default MovieCard;