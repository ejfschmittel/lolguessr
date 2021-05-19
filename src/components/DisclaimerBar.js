import React, {useState} from 'react'
import "../styles/components/Disclaimer.styles.scss"

const DisclaimerBar = () => {
    const [show, setShow] = useState(true)

    return (
        <div className="disclaimer" style={{"display": show ? "block" : "none"}} onClick={() => setShow(false)}>       
            Disclaimer
        </div>
    )
}

export default DisclaimerBar;