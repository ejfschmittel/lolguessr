import React, {useState, useMemo, useEffect} from 'react'

import HeaderBar from "./components/HeaderBar"
import GameMenu, {GAMES} from "./components/GameMenu"
import GuessChampionByAbilityNameGame from "./components/GuessChampionByAbilityGame"
import GuessTheOddOneOut from "./components/GuessTheOddOneOut"
import HigherOrLowerItemGame from "./components/HigherLowerItemsGame"
import {getData, DATA_PATHS, getChampionData, getRandomChampion, getRandomChampionAbillity, getAllItems} from "./utils/riot"
import Disclaimer from "./components/DisclaimerBar"

import "./styles/main.scss"





function App() {

  const [game, setGame] = useState(null)



  const onGameSelect = (gameKey) => {
    console.log("on game select")
    console.log(gameKey)
    setGame(gameKey)
  }

  const onBackToMenu = () => {
    setGame(null)
  }


  const Container = useMemo(() => {
    console.log(game)
    
    switch(game){

      case GAMES.HIGHER_OR_LOWER.key:
        console.log("hello")
        return <HigherOrLowerItemGame />
      case GAMES.GUESS_CHAMPION_BY_ABILITY.key:
        return <GuessChampionByAbilityNameGame />
      case GAMES.GUESS_THE_ODD_ONE_OUT.key:
          return <GuessTheOddOneOut />
      default: 
        return <GameMenu onGameSelect={onGameSelect} />
    }
  }, [game])

  console.log(Container)

  return (
    <div className="App">
      <div class="app-container">
        <HeaderBar  onBackToMenu={onBackToMenu}/>
        <div className="game-container">
          {Container}
        </div>
        
      </div>
      <Disclaimer />
    </div>
  );
}

export default App;
