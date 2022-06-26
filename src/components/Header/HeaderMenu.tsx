import React, { FC } from 'react';
import SimpleBar from 'simplebar-react';
import image from '../../assets/preview-img.png'

interface HeaderMenuProps {
    isMenuVisible: boolean,
}

const HeaderMenu: FC<HeaderMenuProps> = ({isMenuVisible}) => {
    return (
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
    );
};

export default HeaderMenu;