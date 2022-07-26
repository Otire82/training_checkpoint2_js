import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function GameDetail() {

    const {id} = useParams();

    const [gameDetails, setGameDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(game => setGameDetails(game.data))
    }, []);

    return(
      <>
        {
            gameDetails &&
            <div>
                <img src={gameDetails.background_image} alt={gameDetails.name}/>
                <h2>{gameDetails.name}</h2>
                <p>{gameDetails.rating}</p>
                <p>Release date: {gameDetails.released}</p>
            </div>
        }

      </>
      )
}

export default GameDetail;