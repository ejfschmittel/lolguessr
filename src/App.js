import React, {useState, useMemo, useEffect} from 'react'

import HeaderBar from "./components/HeaderBar"
import GameMenu, {GAMES} from "./components/GameMenu"
import GuessChampionByAbilityNameGame from "./components/GuessChampionByAbilityGame"
import GuessTheOddOneOut from "./components/GuessTheOddOneOut"
import {getData, DATA_PATHS, getChampionData, getRandomChampion, getRandomChampionAbillity} from "./utils/riot"

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
    console.log(GAMES.GUESS_CHAMPION_BY_ABILITY)
    switch(game){

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
    </div>
  );
}

export default App;
