import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IEpisode } from '../../models/IEpisode';
import Row from '../Containers/Row/Row';
import Section from '../Containers/Section/Section';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
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
    const {activeEpisodes, isFirstLoadingActiveEpisodes} = useAppSelector(state => state.activeEpisodes)

    useEffect(() => {
        if (!isFirstLoadingActiveEpisodes) {
            localStorage.setItem('activeEpisodes', activeEpisodes.join(','))
        }
    }, [activeEpisodes])

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setIsSpinnerLoading(isLoading)
            }, 1000);
        }
    }, [isLoading])

    return (
        <Section className='movie-listing'>
                {isSpinnerLoading 
                    ? <Spinner width={200} />
                    : 
                    <div className="movie-listing__content">
                        <div className="movie-listing__season-row">
                            {seasonsArr.map(season => 
                                <div 
                                    key={season} 
                                    onClick={() => setSeason(season)}
                                    className={[
                                            'movie-listing__season-tab', 
                                            season === currentSeason && 'movie-listing__season-tab_active'
                                        ].join(' ')}
                                >
                                    ?????????? {season}
                                </div>    
                            )}
                        </div>
                        {error
                            ? <div className='movie-listing__error'>{error}</div>
                            : <Row className="movie-listing__box">
                                {episodes.map(episode => 
                                    <EpisodeCard 
                                        episode={episode}
                                        isActive={activeEpisodes.includes(episode.episode_id)}
                                        key={episode.episode_id}
                                    />
                                )}
                            </Row>
                        }
                    
                    </div>
                }
        </Section>
    );
};

export default EpisodeListing;