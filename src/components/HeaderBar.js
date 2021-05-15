import React from 'react'

import "../styles/components/HeaderBar.styles.scss"

const HeaderBar = ({onBackToMenu}) => {
    return ( 
        <header className="header-bar">
            <div onClick={onBackToMenu}>Menu</div>
            <h1 className="header-bar__title">Title</h1>
            <div>Settings</div>
        </header>
    )
}

export default HeaderBar;