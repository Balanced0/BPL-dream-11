import React from 'react';
import PlayerCard from '../playerCard/PlayerCard';

const AvailablePlayers = ({data}) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                data.map((player) =>{
                    return (
                        <PlayerCard player={player}></PlayerCard>
                    );
                })
            }
        </div>
    );
};

export default AvailablePlayers;