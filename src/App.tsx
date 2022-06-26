import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/EpisodeDetails/EpisodeDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { changeTheme, Themes } from './store/slices/theme/themeSlice';

const App = () => {
    const {theme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        localStorage.getItem('theme') === Themes.LIGHT && dispatch(changeTheme())
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
                    <Route path='episode/:movieID' element={<MovieDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
