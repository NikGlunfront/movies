import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/preview-img.png'
import { useAppDispatch } from '../../hooks/redux';
import { IEpisode } from '../../models/IEpisode';
import { deleteActiveEpisode } from '../../store/slices/episodes/activeEpisodesIdSlice';

interface HeaderMenuItemProps {
    episode: IEpisode,
    closeMenu: () => void;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({episode, closeMenu}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function deleteEpisodeFromList() {
        dispatch(deleteActiveEpisode(episode.episode_id))
    }

    function handleExpandEpisode() {
        closeMenu()
        navigate(`/episode/${episode.episode_id}`, { replace: true });
    }

    return (
        <div className="movie-to-watch__item">
            <img src={image} alt="img" />
            <div className="movie-to-watch__details">
                <div className="movie-to-watch__episode">
                    <div><strong>Сезон {episode.season}</strong></div>
                    <span><strong>Эпизод №{episode.episode}. </strong>{episode.title}</span>
                </div>
                <div className="movie-to-watch__buttons">
                    <button onClick={deleteEpisodeFromList} className='page-button movie-to-watch__delete'>Удалить</button>
                    <button onClick={handleExpandEpisode} className='page-button movie-to-watch__expand-episode'>Перейти к описанию</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenuItem;