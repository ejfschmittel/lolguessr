import React from 'react'
import { getImageUrl} from "../utils/riot"

const LolIcon = ({image, ...props}) => {
    const url = image ? getImageUrl(image) : null;
    return <img src={url} {...props}/>
}

export default LolIcon;