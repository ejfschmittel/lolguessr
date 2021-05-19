import React, {useState, useMemo, useEffect} from 'react'

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import HeaderBar from "./components/HeaderBar"
import GameMenu, {GAMES} from "./components/GameMenu"
import GuessChampionByAbility from "./components/GuessChampionByAbilityGame"
import GuessTheOddOneOut from "./components/GuessTheOddOneOut"
import HigherOrLower from "./components/HigherLowerItemsGame"

import Disclaimer from "./components/DisclaimerBar"


import "./styles/main.scss"





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="app-container">
          <HeaderBar />
          <div className="game-container">
            <Switch>
              <Route path={`/${GAMES.GUESS_CHAMPION_BY_ABILITY.path}`} component={GuessChampionByAbility} />  
              <Route path={`/${GAMES.HIGHER_OR_LOWER.path}`} component={HigherOrLower} />
              <Route path={`/${GAMES.GUESS_THE_ODD_ONE_OUT.path}`} component={GuessTheOddOneOut} />
              <Route path="/" component={GameMenu} />
            </Switch>
          </div>
        </div>
        <Disclaimer />
      </div>
    </BrowserRouter>
  );
}

export default App;
