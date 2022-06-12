import React, { FC } from 'react';
import { ISpinnerDot } from './Spinner';

interface SpinnerCircleProps {
    dotArray: ISpinnerDot[],
    dotSize: number,
    width: number
}

const SpinnerCircle: FC<SpinnerCircleProps> = ({dotSize, width, dotArray}) => {
    return (
        <div 
            style={{
                width: `${width / 2}px`,
                height: `${width / 2}px`,
                margin: `0 -${dotSize / 2}px`
            }}
            className='preloader__circle'
        >
            {dotArray.map(dot => 
                <div 
                    key={dot.dot_id} 
                    className='preloader__dot-area'
                    style={{transform: `${dot.dotArea_transform}`}}
                >
                    <span 
                        className='preloader__dot'
                        style={{
                            width: `${dotSize}px`,
                            height: `${dotSize}px`,
                            animationDelay: dot.dot_animationDelay,
                            animationDuration: dot.dot_animationSpeed
                        }}
                    ></span>
                </div>    
            )}
        </div>
    );
};

export default SpinnerCircle;