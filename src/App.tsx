import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/EpisodeDetails/EpisodeDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
    const [isThemeBlack, setIsThemeBlack] = useState<boolean>(true)

    function changeTheme(isTrue: boolean) {
        setIsThemeBlack(isTrue)
    }

    return (
        <div className=
            {[
                'page-wrapper',
                isThemeBlack ? 'dark-theme' : 'light-theme'
            ].join(' ')}
            >
            <BrowserRouter>
                <Header setIsHeaderBlack={changeTheme} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='episode/:imdID' element={<MovieDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
