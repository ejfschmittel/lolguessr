
import React, {useState, useEffect} from 'react'
import ChampionsInput from "./ChampionInputBox"
import {getRandomChampionAbillity, getImageUrl} from "../utils/riot"


import "../styles/components/GuessChampionByAbilityGame.styles.scss";
/*

- get random champion. 
- Get random ability 

    - solve
    - hint
    - next buttons

    What to guess

    - champion
    - ability name

*/


const hintsOrder = ["abilityKey","abilityName","championFirstLetter"]


const emptyActiveHints = {
    championFirstLetter: false,
    abilityKey: false,
    abilityName: false,
    solved: false,
    solvedByUser: false,
}

const GuessChampionByAbilityNameGame = () => {
    const [hintCounter, setHintCounter] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [text, setText] = useState("")

    const [hintText, setHintText] = useState("test")

    const [data, setData] = useState({
        championID: null,
        champion: null,
        ability: null,
    })


    const [activeHints, setActiveHints] = useState(emptyActiveHints)
    
    useEffect(() => {
        loadNew()
    },[])



    useEffect(() => {
        updateHintText()
    },[activeHints])
   

    const updateHintText = () => {
        const text = hasActiveHints() ? getHintsText() : null;
        setHintText(text)
    }

    const hasActiveHints = () => {
        let hasActiveHints = false;
        Object.keys(activeHints).forEach(key => {
            if(activeHints[key]) hasActiveHints = true;
        })
        return hasActiveHints
    }

    const getHintsText = () => {
        console.log(activeHints)
        const solvedAdd = activeHints.solvedByUser ? "Correct: " : "";
        const abilityKeyHint = activeHints.abilityKey || activeHints.solved ? data.ability["key"] : "";
        const abilityNameHint = activeHints.abilityName || activeHints.solved ? `, called "${data.ability["name"]}",` : "";
        const endPart = activeHints.solved ? data.champion.name : activeHints.championFirstLetter ? `${data.champion.name.charAt(0)}...` : "which Champion?"
        return `${solvedAdd} This ability${abilityNameHint} is the ${abilityKeyHint} ability of ${endPart}`;
    }


    const onHintPress = () => {
        const nextHint = hintsOrder[hintCounter]
        
        setActiveHints({
            ...activeHints,
            [nextHint]: true,
        })
        setHintCounter(hintCounter+1)
    }

    const onSolvePress = () => {
        setActiveHints({
            ...activeHints,
            solved: true,
        })
    }

    const onNextClick = () => {
        loadNew()
        setText("")
    }



    const loadNew = async () => {
        console.log("load new")
        setIsLoading(true)
        const data = await getRandomChampionAbillity();
        console.log(data)
        setHintText(null)
        setHintCounter(0)
        setActiveHints(emptyActiveHints)
        setIsLoading(false)
        setData(data)
      
    }


    const onChange = (e) => {
        const {value} = e.target;
        setText(value)
        if(value.toLowerCase() == data.champion.name.toLowerCase()){
            const abilityKeyHint = data.ability["key"]
            const text = `Correct: This ability is the ${abilityKeyHint} ability of ${data.champion.name}.`;
            setHintText(text)
        }
    }


    return (
        <div>
            <div>


                <h2>Guess the Champion this ability belongs to</h2>
                <div className="">

                </div>




                <div className="icon icon--hero">
                    <LolIcon 
                        image={data?.ability?.image} 
                        className=""
                    />
                </div>

                <div className="hintText">
                    {hintText}
                </div>
             


                <div>
                 <ChampionsInput id="test" list="champions" placeholder="Champion..." onChange={onChange} value={text}/>
                </div>
                

                <div className="buttons">
                    <button onClick={onHintPress}>Hint</button>
                    <button onClick={onSolvePress}>Solve</button>
                    <button onClick={onNextClick}>Next</button>
                </div>
            </div>
        </div>
    )

}

const LolIcon = ({image, ...props}) => {
    const url = image ? getImageUrl(image) : null;
    return <img src={url} {...props}/>
}

export default GuessChampionByAbilityNameGame