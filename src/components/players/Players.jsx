import React, {use} from 'react';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    console.log(data);
    return (
        <div>
            Player Image: <img src={data[0].playerImage}></img>
        </div>
    );
};

export default Players;