import React, { FC, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import { useAppSelector } from '../../hooks/redux';
import HeaderMenuItem from './HeaderMenuItem';

interface HeaderMenuProps {
    isMenuVisible: boolean,
    activeEpisodes: number[],
    closeMenu: () => void
}

const HeaderMenu: FC<HeaderMenuProps> = ({isMenuVisible, activeEpisodes, closeMenu}) => {
    const {episodes} = useAppSelector(state => state.episodes)
    
    const activeEpisodesArr = episodes.filter(episode => activeEpisodes.includes(episode.episode_id))

    return (
        <div className={
            [
                'movie-to-watch',
                isMenuVisible && 'movie-to-watch_visible'
            ].join(' ')
        }>
            <div className="movie-to-watch__title">Добавленные к просмотру:</div>
            <SimpleBar style={{ maxHeight: 450 }}>
                {activeEpisodesArr.length
                    ? activeEpisodesArr.map(episode =>
                        <HeaderMenuItem 
                            key={episode.episode_id} 
                            episode={episode}
                            closeMenu={closeMenu}
                        />
                        )
                    :<div className='movie-to-watch__empty'>Вы еще не выбрали понравившиеся серии</div>
                }
            </SimpleBar>
        </div>
    );
};

export default HeaderMenu;