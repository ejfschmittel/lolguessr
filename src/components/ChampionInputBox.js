import React, {useEffect, useState} from 'react'
import {getAllChampions} from "../utils/riot"



const ChampionInput = ({ id, list, ...props}) => {

    const [championsList, setChampionsList] = useState([])

    useEffect(() => {loadChampionsList();},[])

    const loadChampionsList = async () => {
        const champions = await getAllChampions();
        setChampionsList(champions)
    }

    return (
        <React.Fragment>
            <input list={list} id={id} {...props}/>
            <datalist id={list}>
                {championsList.map(championID => {
                    return <option value={championID} key={id + championID}/>
                })}
            </datalist>
        </React.Fragment>
    )
}

export default ChampionInput;