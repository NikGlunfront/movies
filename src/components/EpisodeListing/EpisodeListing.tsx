import React, { FC, useEffect, useState } from 'react';
import { IEpisode } from '../../models/IEpisode';
import MovieCard from '../EpisodeCard/EpisodeCard';
import Spinner from '../Spinner/Spinner';
import './EpisodeListing.scss';

interface EpisodeListingProps {
    isLoading: boolean,
    episodes: IEpisode[],
    error: string,
    seasonsCount: number
    currentSeason: number,
    setSeason: (season: number) => void
}

const EpisodeListing: FC<EpisodeListingProps> = ({
    episodes, error, isLoading, seasonsCount, currentSeason, setSeason
}) => {

    const [isSpinnerLoading, setIsSpinnerLoading] = useState<boolean>(true)
    const seasonsArr: number[] = Array.from(Array(seasonsCount + 1).keys()).slice(1)

    useEffect(() => {
        setTimeout(() => {
            setIsSpinnerLoading(isLoading)
        }, 1000);
    }, [])

    return (
        <section className="section movie-listing">
            <div className="container">
                {isSpinnerLoading 
                    ? <Spinner width={200} />
                    : 
                    <div className="movie-listing__content">
                        <div className="movie-listing__season-row">
                            {seasonsArr.map(season => 
                                <div 
                                    key={season} 
                                    onClick={() => setSeason(season)}
                                    className={['movie-listing__season-tab', season === currentSeason && 'movie-listing__season-tab_active'].join(' ')}
                                >
                                    Сезон {season}
                                </div>    
                            )}
                        </div>
                        {error
                            ? <div className='movie-listing__error'>{error}</div>
                            : <div className="movie-listing__box">
                                {episodes.map(episode => 
                                    <MovieCard 
                                        episode={episode} 
                                        key={episode.episode_id}
                                    />
                                )}
                            </div>
                        }
                    
                    </div>
                }
            </div>
        </section>
    );
};

export default EpisodeListing;