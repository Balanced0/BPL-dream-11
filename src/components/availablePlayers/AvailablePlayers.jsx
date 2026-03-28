import React from 'react';
import PlayerCard from '../playerCard/PlayerCard';

const AvailablePlayers = ({data, setCoins, coins, selectedPlayers, setSelectedPlayers}) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                data.map((player) =>{
                    return (
                        <PlayerCard key={player.playerName} player={player} setCoins={setCoins} coins={coins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
                    );
                })
            }
        </div>
    );
};

export default AvailablePlayers;