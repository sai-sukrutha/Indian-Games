import React, {useState} from 'react';
import './GamesMenu.css';

interface IGame {
    id: number,
    name: string,
    description: string,
    image: string
}

// TODO: Instructions

const games : IGame[] = 
[
    {
        id: 1,
        name: 'Vaikuntapali',
        description: 'Snakes and Ladder',
        image: './images/vaikuntapali-size.jpg'
    },
    {
        id: 2,
        name: 'Omanagunta',
        description: '7 boxes Tamarind seeds game',
        image: './images/pallanguli2-size.jpg'
    }
]


function GamesMenu () {
    // const [games, setGames] = useState(games);       //  TODO: for games no need of state ?
    const [selectedGame, setSelectedGame] = useState(1);    // First game is always selected initially

    function enterGame(){ 
        let selectedGameName = games[0].name;
        games.map(game => {
            if(game.id === selectedGame) {
                selectedGameName = game.name;
            }
        });
        console.log('Enter Game', selectedGameName);
    }

    // TODO: Add game name above the image with some transparency
    return(
        <div> 
            <div className = 'games-list' >
                {
                games.map(game => {
                    return(
                        <div className={'list-item'+(selectedGame === game.id? ' active' : '')} onClick={()=>setSelectedGame(game.id)}>
                            <p>{game.name}</p>
                            <img src={game.image} alt={game.description}/>
                        </div>
                    )
                })
                }
            </div>
            <div className='button-div'>
                <button className='button-ele' onClick={enterGame}> Play Game </button>
            </div>
        </div>
    );
}

export default GamesMenu;