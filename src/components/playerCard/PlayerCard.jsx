import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const PlayerCard = ({player}) => {
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
                        <button className="btn btn-xs">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;