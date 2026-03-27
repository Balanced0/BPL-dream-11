import React, {use} from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    return (
        <div className="container mx-auto pl-4 pr-4">
            <AvailablePlayers data={data}></AvailablePlayers>
        </div>
    );
};

export default Players;