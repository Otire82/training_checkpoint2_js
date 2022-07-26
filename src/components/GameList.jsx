import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Game from './Game';


function GameList () {

    const [games, setGames] = useState("");
    const [filterGames, setFilterGames] = useState(false);

    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/`)
        .then(res => res.data)
        .then(data => setGames(data))

    }, [] );

    const handleFilterGames = () => {
        setFilterGames(!filterGames);
    };

    return(
        <>
            <button onClick={handleFilterGames}>
                {
                    filterGames ? "Afficher la liste complète" : "Afficher les meilleurs"
                }
            </button>
            {
                games && games
                .filter((game) => !filterGames || game.rating > 4.5)
                .map(game => (
                    <Game key={game.id} game={game} />
                ))
            }
        </>
    );
}

export default GameList;