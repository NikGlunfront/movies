import React, { FC} from 'react';
import { Link } from 'react-router-dom';
import { IEpisode } from '../../models/IEpisode';
import './EpisodeCard.scss';
import image from '../../assets/card-image.jpg'
import {AiFillHeart} from 'react-icons/ai';
import { useAppDispatch } from '../../hooks/redux';
import { deleteActiveEpisode, setActiveEpisode } from '../../store/slices/episodes/activeEpisodesIdSlice';

interface MovieCardProps {
    episode: IEpisode,
    isActive: boolean,
}

const EpisodeCard: FC<MovieCardProps> = ({episode, isActive}) => {
    const dispatch = useAppDispatch()

    function toggleEpisodeActivity() {
        if (isActive) {
            dispatch(deleteActiveEpisode(episode.episode_id))
        } else {
            dispatch(setActiveEpisode(episode.episode_id))
        }
    }

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
                <div className="item-listing__btns">
                    <Link 
                        to={`/episode/${episode.episode_id}`}
                        className='page-button item-listing__btn-more' 
                    >
                        Подробнее
                    </Link>
                    <button 
                        onClick={toggleEpisodeActivity}
                        className={[
                                "page-button item-listing__like",
                                isActive ? 'item-listing__like_active' : ''
                            ].join(' ')}>
                            <AiFillHeart />
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default EpisodeCard;