import React from 'react';
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoins, coins}) => {
    console.log({selectedPlayers});
    const handleDeletePlayer = (player) =>{
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers([...filteredPlayers]);
        setCoins(coins + player.priceInDollars);
    }
    return (
        <div>
            {
                selectedPlayers.map(player=>{
                    return (
                        <div className="border flex justify-between items-center">
                            <div className="flex gap-4">
                                <div>IMG</div>
                                <div>
                                    <h3>{player.playerName}</h3>
                                    <p>{player.battingStyle}</p>
                                </div>
                            </div>
                            <button className="btn" onClick={()=>handleDeletePlayer(player)}><MdDelete /></button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SelectedPlayers;