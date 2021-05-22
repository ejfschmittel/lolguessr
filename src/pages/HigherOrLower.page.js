import React, {useEffect, useState, useRef} from 'react'

import {getAllItems, getImageUrl, getRandomArrayItem} from "../utils/riot"


import {FaCaretUp, FaCaretDown, FaEquals} from "react-icons/fa"

import "../styles/pages/HigherOrLower.styles.scss"
/*
    getAllItems = () => {}
    getItem = () => 
    getItemImage = () => 
*/
import LolIcon from '../components/LolIcon'


const HigherOrLower = () => {
    const [isSolving, setIsSolving] = useState(false)

    const sliderRef = useRef()

    const [state, setState] = useState({
        translate: 0,
        transition: 0,
        isTransitioning: false,
        currentItems: [null, null, null],   
    })


    useEffect(async () => {
        // load initial
        const items = await getUniqueItems(3, []);
        setState({
            translate: 0,
            transition: 0,
            isTransitioning: false,
            currentItems: items,
            showCorrect: false,
            showWrong: false,
        })

        
    },[])


    console.log(state)


    const getUniqueItems = async (amount, items=[]) => {

        const allItems = await getAllItems()

        for(let i = 0; i < amount; i++){
            // filter items
            const usedKeys = items.map(item => item.key);
            const availableItems = allItems.filter((item) => !usedKeys.includes(item.key))
            const randomUnusedItem = getRandomArrayItem(availableItems)
            items.push(randomUnusedItem)
        }
        return items;
    }





    useEffect(() => {

        sliderRef?.current?.addEventListener('transitionend', onTransitionEnd)
     
        return () => {           
            sliderRef?.current?.removeEventListener('transitionend', onTransitionEnd)
        }
    }, [state])


    const onGuess = async (correct=false) => {
        if(isSolving){
            console.log("blocked")
            return;
        }
        setIsSolving(true)
        // show correct / incorrect 
      
       
        // show price of first two items & if correct or not
        console.log(state.currentItems.slice())
        const items = state.currentItems.map((item, idx) => idx == 0 || idx == 1 ? {...item, showPrice: true} : item)
        console.log("on solve")
        console.log(items.slice())
        setState({
            ...state,
            currentItems: items,
            showCorrect: correct,
            showWrong: !correct
        })
        await new Promise(resolve => setTimeout(resolve, 1200));
        //await new Promise(resolve => setTimeout(resolve, 1000));
        // go to next item
        goToNextItem()
    }

    const onHigherClick = () => onGuess(state.currentItems[1].gold.total > state.currentItems[0].gold.total )
    const onEqualsClick = () => onGuess(state.currentItems[1].gold.total == state.currentItems[0].gold.total )
    const onLowerClick = () => onGuess(state.currentItems[1].gold.total < state.currentItems[0].gold.total )
  
  

    const goToNextItem = () => {
        console.log("go to next item")
        const rem = parseInt(getComputedStyle(document.documentElement).fontSize)
        setState({
            ...state,
            transition: .8,
            translate: 20 * rem,
            isTransitioning: true,
        })
       
    }

    const onTransitionEnd = async () => {
        // replace items
        // slide bakc instanly
        console.log(state.currentItems)
        const newItems = await getUniqueItems(1, state.currentItems)
        console.log(newItems)

        setState({
            ...state,
            transition: 0,
            translate: 0,
            isTransitioning: false,
            currentItems: newItems.slice(1,4),
            showWrong: false,
            showCorrect: false,
        })
        setIsSolving(false)
    }


    return (
        <div>

            <div>
                <h2>Higher or Lower</h2>
                <p>Has {state.currentItems ? state.currentItems[1]?.name: "ITEM_A"} a higher or lower price than  {state.currentItems ? state.currentItems[0]?.name: "ITEM_B"}</p>
                <div className="higher-or-lower">
                    <div className="higher-or-lower__vs">
                        VS
                    </div>

                    <div className="higher-or-lower__slider" ref={sliderRef} style={{         
                            transform: `translateX(-${state.translate}px)`,
                            transition: `transform ease-out ${state.transition}s`
                        }}>

                        {state.currentItems.map((item, idx) => {
                            return <ItemDisplay item={item} key={`item-display-${idx}`}/>
                        })}
              
                    </div>
                   

                   
                  
                </div>

                
                <div className="higher-or-lower__result">
                       {state.showCorrect ? "Correct" : null}
                       {state.showWrong ? "Wrong" : null}
                   </div>

                <button className="button button--default" onClick={onHigherClick}>
                    Higher
                    <FaCaretUp />
                </button>
                <button className="button button--default button--smaller-icon" onClick={onEqualsClick}>
                    Equal
                    <FaEquals />
                </button>
                <button className="button button--default" onClick={onLowerClick}>
                    Lower
                    <FaCaretDown />
                </button>
            </div>
        </div>
    )
}



const ItemDisplay = ({item}) => {
    
    return (
        <div className="item-display">
            <div className="item-display__title">{item?.name}</div>
            <LolIcon className="item-display__img" image={item?.image}></LolIcon>
            <div className="item-display__price">{item?.showPrice ? item?.gold.total : null}</div>
        </div>
    )
}
export default HigherOrLower;