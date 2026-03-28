import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const PlayerCard = ({player, setCoins, coins, selectedPlayers, setSelectedPlayers}) => {
    const[isSelected, setIsSelected] = useState(false);
    const newCoins = () =>{
        if(player.priceInDollars > coins){
            alert("Not enough coin to purchase this player");
            setIsSelected(false);
            return;
        }
        setCoins(coins - player.priceInDollars);
        setSelectedPlayers([...selectedPlayers, player]);
        alert(`${player.playerName} purchased successfully`);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className="flex gap-2 items-center"><FaUser /> {player.playerName}</p>
                    <div className="flex ">
                        <p className="flex gap-2 items-center"><FaFlag /> {player.playerCountry}</p>
                        <div className="badge badge-ghost">{player.playerType}</div>
                    </div>
                    <div className="divider"></div>
                    <p>Rating</p>
                    <div className="flex justify-between">
                        <p className="flex-1">{player.battingStyle}</p>
                        <p className="flex-1 text-right">{player.bowlingStyle}</p>
                    </div>
                    <div className="flex items-center">
                        <p>Price:${player.priceInDollars}</p>
                        <button onClick={()=>{setIsSelected(true); newCoins()}} className="btn btn-xs" disabled={isSelected? true : false}>{isSelected? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;