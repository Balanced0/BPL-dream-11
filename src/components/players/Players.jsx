import React, {use, useState} from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    const[selectedType, setSelectedType] = useState("Available");
    return (
        <div className="container mx-auto pl-4 pr-4">
            <div className ="flex justify-between items-center">
                {
                    selectedType==="Available" ? <h3>Available Players</h3>:<h3>Selected Players</h3>
                }
                <div className="flex">
                    <button onClick={()=>setSelectedType("Available")} className={`btn ${selectedType==="Available" ? "btn-success" : "btn-neutral" }`}>Available</button>
                    <button onClick={()=>setSelectedType("Selected")} className={`btn ${selectedType==="Selected" ? "btn-success" : "btn-neutral" }`}>Selected</button>
                </div>
            </div>
            {
                selectedType==="Available" ? <AvailablePlayers data={data}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
            }
        </div>
    );
};

export default Players;