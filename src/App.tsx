import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
    return (
        <div className='page-wrapper'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='movie/:imdID' element={<MovieDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
