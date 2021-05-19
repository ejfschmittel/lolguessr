import React from 'react'

import "../styles/components/HeaderBar.styles.scss"

const HeaderBar = ({onBackToMenu}) => {
    return ( 
        <header className="header-bar">
            <div onClick={onBackToMenu} className="header-bar__menu-btn">Menu</div>
            <h1 className="header-bar__title">
                League of Legends Quizzes
            </h1>
            <div className="header-bar__menu-btn">Settings</div>
        </header>
    )
}

export default HeaderBar;