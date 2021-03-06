import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/EpisodeDetails/EpisodeDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { changeTheme, Themes } from './store/slices/theme/themeSlice';
import { updateActiveEpisodes } from './store/slices/episodes/activeEpisodesIdSlice';
import { fetchEpisodes } from './store/slices/episodes/episodesFetch';
import CharacterPage from './pages/Character/CharacterPage';

const App = () => {
    const {theme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    const {isFirstLoadingActiveEpisodes} = useAppSelector(state => state.activeEpisodes)

    useEffect(() => {
        localStorage.getItem('theme') === Themes.LIGHT && dispatch(changeTheme())
        dispatch(fetchEpisodes())
        let storageActiveEpisodes = localStorage.getItem('activeEpisodes')
        if (isFirstLoadingActiveEpisodes) {
            storageActiveEpisodes && dispatch(updateActiveEpisodes(storageActiveEpisodes.split(',')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className=
            {[
                'page-wrapper',
                theme === Themes.DARK ? 'dark-theme' : 'light-theme'
            ].join(' ')}
            >
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='episode/:episodeID' element={<MovieDetails />} />
                    <Route path='character/:characterName' element={<CharacterPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
