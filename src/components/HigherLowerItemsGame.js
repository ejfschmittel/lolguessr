import React, {useEffect, useState} from 'react'

import {getAllItems, getImageUrl, getRandomArrayItem} from "../utils/riot"


import "../styles/components/HigherOrLower.styles.scss"
/*
    getAllItems = () => {}
    getItem = () => 
    getItemImage = () => 
*/
import LolIcon from "./LolIcon"


const HigherLowerItemsGame = () => {
    const [baseLineItem, setBaseLineItem] = useState(null)
    const [comparisonItem, setComparisonItem] = useState(null)


    useEffect(async () => {
        // load initial
        const allItems = await getAllItems();
        const baseLine = getRandomArrayItem(allItems);
        const unusedItems = allItems.filter((item, idx) => baseLine.key !== item.key);
        const comparison = getRandomArrayItem(unusedItems);
        console.log(comparison)
        setBaseLineItem(baseLine)
        setComparisonItem(comparison)
    },[])

    
    const onNextRound = () => {
        // only load one new
        // create animation
    }

    return (
        <div>

            <div>
                <h2>Higher or Lower</h2>
                <p>Has {"a"} a higher or lower price than {"b"}</p>
                <div className="higher-or-lower">
                    <div className="higher-or-lower__half-right">
                    <div className="item-display">
                            <div className="item-display__title">{baseLineItem?.name}</div>
                            <LolIcon className="item-display__img" image={baseLineItem?.image}></LolIcon>
                        </div>
                    </div>
                    <div className="higher-or-lower__vs">
                        VS
                    </div>
                    <div className="higher-or-lower__half-left">
                        <div className="item-display">
                            <div className="item-display__title">{comparisonItem?.name}</div>
                            <LolIcon className="item-display__img" image={comparisonItem?.image}></LolIcon>
                        </div>
                        
                    </div>
                </div>

                <button>Higher</button>
                <button>Lower</button>
            </div>
        </div>
    )
}

export default HigherLowerItemsGame;