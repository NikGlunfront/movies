import React from 'react';
import image from '../../assets/preview-img.png'

const HeaderMenuItem = () => {
    return (
        <div className="movie-to-watch__item">
            <img src={image} alt="img" />
            <div className="movie-to-watch__details">
                <div className="movie-to-watch__episode">
                    <span><strong>Episode1. </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, harum.</span>
                </div>
                <div className="movie-to-watch__buttons">
                    <button className='page-button movie-to-watch__delete'>Удалить</button>
                    <button className='page-button movie-to-watch__expand-episode'>Перейти к описанию</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenuItem;