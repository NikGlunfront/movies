import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {GoPlay} from 'react-icons/go'
import './Header.scss'
import Toggler from '../Toggler/Toggler';
import image from '../../assets/preview-img.png'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className={
                    [
                        'movie-to-watch',
                        isMenuVisible && 'movie-to-watch_visible'
                    ].join(' ')
                }>
                    <SimpleBar style={{ maxHeight: 450 }}>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                        <div className="movie-to-watch__item">
                            <img src={image} alt="img" />
                            <div className="movie-to-watch__details">
                                <div className="movie-to-watch__episode">
                                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                                </div>
                                <button className='movie-to-watch__expand-episode'>Перейти к описанию</button>
                            </div>
                        </div>
                    </SimpleBar>
                    <button className="movie-to-watch__more">Показать все</button>
                </div>
                <div className='header__content'>
                    <Link className='header__logo' to={'/'}>
                        <span>Breaking Bad Series</span>
                    </Link>
                    <div className="header__btns">
                        <Toggler />
                        <div 
                            className='header__user-image'
                            onClick={toggleMenu}
                        >
                            <GoPlay />
                            <span>23</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;