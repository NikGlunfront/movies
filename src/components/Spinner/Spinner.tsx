import React, { FC } from 'react';
import './Spinner.scss';
import SpinnerCircle from './SpinnerCircle';

interface SpinnerProps {
    width: number
}

export interface ISpinnerDot {
    dot_id: number,
    dotArea_transform: string,
    dot_animationDelay: string,
    dot_animationSpeed: string
}


const Spinner: FC<SpinnerProps> = ({width}) => {
    const leftSpinnerDots: ISpinnerDot[] = []
    const rightSpinnerDots: ISpinnerDot[] = []
    const dotSize: number = width / 15 / 2
    const animationSpeed:number = 1

    for (let i = 0; i < 21; i++) {
        leftSpinnerDots.push({
            dot_id: i,
            dot_animationDelay: `calc(${animationSpeed / 40}s * ${i})`,
            dotArea_transform: `rotate(calc(18deg * ${i}))`,
            dot_animationSpeed: `${animationSpeed}s`
        })
        rightSpinnerDots.push({
            dot_id: i,
            dot_animationDelay: `calc(-${animationSpeed / 40}s * ${i})`,
            dotArea_transform: `rotate(calc(18deg * ${i}))`,
            dot_animationSpeed: `${animationSpeed}s`
        })
    }

    return (
        <div className='preloader'>
            <div className="preloader__container">
                <SpinnerCircle 
                    dotArray={leftSpinnerDots}
                    dotSize={dotSize}
                    width={width}
                />
                <SpinnerCircle 
                    dotArray={rightSpinnerDots}
                    dotSize={dotSize}
                    width={width}
                />
            </div>
        </div>
    );
};

export default Spinner;