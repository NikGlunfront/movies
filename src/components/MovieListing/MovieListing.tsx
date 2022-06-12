import React, { FC } from 'react';
import { IEpisode } from '../../models/IEpisode';
import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../Spinner/Spinner';
import './MovieListing.scss';

interface MovieListingProps {
    isLoading: boolean,
    episodes: IEpisode[],
    error: string
}

const MovieListing: FC<MovieListingProps> = ({episodes, error, isLoading}) => { 
    const somevalue = true

    return (
        <section className="section movie-listing">
            <div className="container">
                {somevalue 
                    ? <Spinner />
                    : 
                    <div className="movie-listing__box">
                        {error
                            ? <div className='movie-listing__error'>{error}</div>
                            : episodes.map(episode => 
                                <MovieCard 
                                    episode={episode} 
                                    key={episode.episode_id}
                                />
                            )
                        }
                    
                    </div>
                }
            </div>
        </section>
    );
};

export default MovieListing;