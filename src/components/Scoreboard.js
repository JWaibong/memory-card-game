import React, { useEffect, useState } from 'react'

function Scoreboard(props) {
    const {score, highScore,totalCards} = props;
    const [winner, setWinner] = useState(false);


    useEffect( () => {
        if(score >= totalCards && totalCards !== 0){
            setWinner(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[score]);

    let winMsg = winner? 'Winner !!!' : null;

    return (
        <div className="scoreboard">
            <div>
                Score: {`${score}`}
            </div>
            <div>
                High Score: {`${highScore}`}
            </div>
            <div> {winMsg}</div>
        </div>
    )
}

export default Scoreboard
