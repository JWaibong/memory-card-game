import React, { useState } from 'react'





function Card(props) {

    const {url,name,click,totalCards} = props;
    const [cardName] = useState(name);

    return (
        <div className="img-parent" onClick={()=> click(cardName,totalCards)} value={cardName}>
            <img src={`${url.default}`} alt={`${url.default}`} width="150"/>
            <div className="name">
                <p> {cardName} </p> 
            </div>
        </div>
    )
}

export default Card
