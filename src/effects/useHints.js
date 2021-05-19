import React, {useState} from 'react'

const defaultHints = {
    solved: false,
    userSolve: false
}

const useHints = (emptyHints, hintOrder) => {
    const [hintCounter, setHintCounter] = useState(0)
    const [activeHints, setActiveHints] = useState({
        ...defaultHints,
        ...emptyHints
    });


    const revealNextHint = () => {
        if(hintCounter >= hintOrder.length) return;
        setActiveHints({
            ...activeHints,
            [hintOrder[hintCounter]]: true,
        })
        setHintCounter(hintCounter + 1)
        
    }

    const resetHints = () => {
        setHintCounter(0)
        setActiveHints({
            ...defaultHints,
            ...emptyHints
        })
    }

    const hasActiveHints = () => {
        let hasActiveHints = false;
        Object.keys(activeHints).forEach(key => {
            if(activeHints[key]) hasActiveHints = true;
        })
        return hasActiveHints
    }

    return {
        activeHints, 
        revealNextHint, 
        resetHints,
        hasActiveHints,
    }
}


export default useHints;