import React from 'react'

import "../styles/components/GameMenu.styles.scss"

export const GAMES = {
    GUESS_CHAMPION_BY_ABILITY: {
        key: "champion_by_ability",
        title: "Guess the Champion By Ability",
        image: "",
    },
    GUESS_ABILITY_NAME: {
        key: "ability_name",
        title: "Guess the Ability Name",
        image: "",
    },
    GUESS_THE_ODD_ONE_OUT: {
        key: "odd_one_out",
        title: "Guess the odd one out",
        image: "",
    }
}


const GameMenu = ({onGameSelect}) => {
    return (
        <div className="game-menu">
            {Object.keys(GAMES).map((key) => {
                return <GameMenuTile game={GAMES[key]} onClick={onGameSelect} gameKey={key} key={key}/>
            })}
        </div>
    )
}

const GameMenuTile = ({game, onClick}) => {
    return (
        <div className="menu-tile" onClick={() => onClick(game.key)}>
            <img src="" className="menu-tile__image" />
            <div className="menu-tile__title">{game.title}</div>
        </div>
    )
}

export default GameMenu