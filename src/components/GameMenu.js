import React from 'react'
import {Link} from "react-router-dom"
import "../styles/components/GameMenu.styles.scss"

export const GAMES = {
    GUESS_CHAMPION_BY_ABILITY: {
        key: "champion_by_ability",
        title: "Guess the Champion By Ability",
        image: "",
        path: "guess-champion-by-ability"
    },
    HIGHER_OR_LOWER: {
        key: "higher or lower",
        title: "Higher or lower item price",
        image: "",
        path: "higher-or-lower"
    },
    GUESS_THE_ODD_ONE_OUT: {
        key: "odd_one_out",
        title: "Guess the odd one out",
        image: "",
        path: "odd-one-out"
    }
}


const GameMenu = () => {
    return (
        <div className="game-menu">
            {Object.keys(GAMES).map((key) => {
                return <GameMenuTile game={GAMES[key]} gameKey={key} key={key}/>
            })}
        </div>
    )
}

const GameMenuTile = ({game}) => {
    return (
        <Link className="menu-tile" to={game.path} >
            <img src="" className="menu-tile__image" />
            <div className="menu-tile__title">{game.title}</div>
        </Link>
    )
}

export default GameMenu