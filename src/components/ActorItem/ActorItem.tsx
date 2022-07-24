import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../ActorItem/ActorItem.scss';
import CustomBox from '../Containers/CustomBox/CustomBox';

interface ActorItemProps {
    actor: string
}

const ActorItem: FC<ActorItemProps> = ({actor}) => {
    return (
        <CustomBox className='actor-item'>
            <Link 
                to={`/character/${actor}`}
                className='actor-item__inner'
            >
                {actor}
            </Link>
        </CustomBox>
    );
};

export default ActorItem;