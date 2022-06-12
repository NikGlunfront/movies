import React, { FC } from 'react';
import { IEpisode } from '../../models/IEpisode';
import './MovieCard.scss';

interface MovieCardProps {
    episode: IEpisode
}

const MovieCard: FC<MovieCardProps> = ({episode}) => {
    return (
        <div className='item-listing'>
            <div className='item-listing__title'>{episode.title}</div>
        </div>
    );
};

export default MovieCard;