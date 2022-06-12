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
        <Link 
            to={`/movie/${episode.episode_id}`} 
            className='item-listing'
        >
            <img src={image} alt="card" />
            <div className="item-listing__info">
                <div className='item-listing__title'>{episode.title}</div>
            </div>
        </Link>
    );
};

export default MovieCard;