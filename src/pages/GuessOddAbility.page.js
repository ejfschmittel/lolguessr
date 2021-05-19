

import React, {useState, useEffect} from 'react'

import {getRandomChampionAbillity, getImageUrl, getOddOneOutData} from "../utils/riot"

import LolIcon from '../components/LolIcon'

import "../styles/pages/OddOneOutGame.styles.scss";

/*
    odd one out 

    - by name
    - by icon 
    - both??

*/



/*

    const {activeHints, revealNextHint, resetHints}
*/

const GuessTheOddOneOut = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [gameData, setGameData] = useState(null)

    

    useEffect(() => {
        // load 
        loadNew()
    },[])

    const loadNew = async () => {
        setIsLoading(true)
        // get two random champion that are not the same
        // get abilities 
        // get random abiliteis
        const data = await getOddOneOutData();
        setGameData(data)
        setIsLoading(false)
    }

    const onGuess = (idx) => {
       



        const abilities = gameData.abilities
        abilities[idx]["guessed"] = true;
     

        setGameData({
            ...gameData,
            abilities: abilities,
        })
      


    }

    const onNextClick = () => {
        loadNew();
    }

    console.log(gameData)

    return (
        <div>
            <div>

                <h2>Guess the Odd one </h2>


                <div className="champion-image">
                    <LolIcon image={gameData?.primaryChampion?.image} />
                </div>

                <p>Which of these abilities does not belong to {gameData?.primaryChampion ? gameData.primaryChampion.id : "...Loading"}?</p>


                <div className="abilities-display">
                    {gameData?.abilities && gameData.abilities.map((ability, idx) => {
                        return <AbilityIcons ability={ability} idx={idx}onClick={onGuess} />
                    })}
                </div>

                <div className="buttons">
                    <button className="button button--default">Hint</button>
                    <button className="button button--default">Solve</button>
                    <button className="button button--default" onClick={onNextClick}>Next</button>
                </div>
            </div>
        </div>
    )

}

const AbilityIcons = ({ability, idx, onClick}) => {

    let className = `ability-icon
        ${ability.odd ? "ability-icon--correct" : "ability-icon--incorrect"}
        ${!ability.guessed && "ability-icon--force-bg"}`;


    return (
        <div className={className} onClick={() => onClick(idx)}>
             <div className="ability-icon__key">{ability.key}</div>
            <div className="ability-icon__img">
                <LolIcon image={ability.image} />
            </div>
           
            <div  className="ability-icon__name">{ability.name}</div>
        </div>
    )
}


export default GuessTheOddOneOut