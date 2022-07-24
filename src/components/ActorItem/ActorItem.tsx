import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../ActorItem/ActorItem.scss';

interface ActorItemProps {
    actor: string
}

const ActorItem: FC<ActorItemProps> = ({actor}) => {
    return (
        <Link 
            to={`/character/${actor}`}
            className='actor-item'
        >
            {actor}
        </Link>
    );
};

export default ActorItem;