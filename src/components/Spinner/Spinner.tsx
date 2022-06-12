import React, { FC } from 'react';
import './Spinner.scss';

interface ISpinner {
    dot_id: number,
    dotArea_transform: string,
    dot_animationDelay: string
}


const Spinner: FC = ({}) => {
    const leftSpinnerDots: ISpinner[] = []
    const rightSpinnerDots: ISpinner[] = []
    for (let i = 0; i < 21; i++) {
        leftSpinnerDots.push({
            dot_id: i,
            dot_animationDelay: `calc(0.025s * ${i})`,
            dotArea_transform: `rotate(calc(18deg * ${i}))` 
        })
        rightSpinnerDots.push({
            dot_id: i,
            dot_animationDelay: `calc(-0.025s * ${i})`,
            dotArea_transform: `rotate(calc(18deg * ${i}))` 
        })
    }

    return (
        <div className='preloader'>
            <div className="preloader__container">
                <div className='preloader__circle'>
                    {leftSpinnerDots.map(dot => 
                        <div 
                            key={dot.dot_id} 
                            className='preloader__dot-area'
                            style={{transform: `${dot.dotArea_transform}`}}
                        >
                            <span 
                                className='preloader__dot'
                                style={{animationDelay: `${dot.dot_animationDelay}`}}
                            ></span>
                        </div>    
                    )}
                </div>
                <div className='preloader__circle'>
                    {rightSpinnerDots.map(dot => 
                        <div 
                            key={dot.dot_id} 
                            className='preloader__dot-area'
                            style={{transform: `${dot.dotArea_transform}`}}
                        >
                            <span 
                                className='preloader__dot'
                                style={{animationDelay: `${dot.dot_animationDelay}`}}
                            ></span>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Spinner;