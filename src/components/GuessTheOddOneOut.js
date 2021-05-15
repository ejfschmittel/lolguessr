

import React, {useState, useEffect} from 'react'
import ChampionsInput from "./ChampionInputBox"
import LoLIcon from "./LolIcon"
import {getRandomChampionAbillity, getImageUrl, getOddOneOutData} from "../utils/riot"
import LolIcon from './LolIcon'

import "../styles/components/OddOneOutGame.styles.scss";

/*
    odd one out 

    - by name
    - by icon 
    - both??

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


    return (
        <div>
            <div>

                <h2>Guess the Odd one </h2>


                <div className="champion-image">
                    <LolIcon image={gameData?.primaryChampion?.image} />
                </div>

                <p>Which of these abilities does not belong to {gameData?.primaryChampion ? gameData.primaryChampion.id : "...Loading"}?</p>


                <div className="abilities-display">
                    {gameData?.abilities && gameData.abilities.map(ability => {
                        return <AbilityIcons ability={ability} />
                    })}
                </div>

                <div className="buttons">
                    <button >Hint</button>
                    <button >Solve</button>
                    <button >Next</button>
                </div>
            </div>
        </div>
    )

}

const AbilityIcons = ({ability, showKey, showName}) => {
    return (
        <div className="ability-icon">
            <div>
                <LolIcon image={ability.image} />
            </div>
            <div>{ability.key}</div>
            <div>{ability.name}</div>
        </div>
    )
}


export default GuessTheOddOneOut