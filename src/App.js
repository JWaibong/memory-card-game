import React, {useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard'

export const OnClickContext = React.createContext();

// note to self, there are reserved properties for jsx elements, onClick being one of them.
function App() {


  const [names,setNames] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [causeShuffle, setCauseShuffle] = useState(false);
  const [totalCards, setTotalCards] = useState(0);


  const handleOnCardClick = (val,totalCards) => {
    if(names.includes(val)){
      setScore(0);
      setNames([]);
    }
    else{
      if(highScore === score){
        setHighScore(prev => prev + 1);
      }
      setScore(prevScore => prevScore + 1);
      setNames([...names, val]);

    }
    setCauseShuffle(true);
  };

  useEffect( () => {
    console.log(names);
    console.log('score', score);
    console.log('highScore', highScore);
  })



  const handleReset = () => {
    setCauseShuffle(false);
  }

  const setTotal = (total) => {
    setTotalCards(total);
  }

  const completeReset = () => {
    setNames([]);
    setScore(0);
    setHighScore(0);
    setCauseShuffle(true);
  }

  return (

    <div className="App">
      <header className="App-header">
        Re:Zero Memory Card Game by Jonathan Ng
      </header>
      <Scoreboard score={score} highScore={highScore} totalCards={totalCards}/>
      <button onClick={completeReset}>
        Reset
      </button>
      <div className="game-container">
          <Cards click={handleOnCardClick} causeShuffle={causeShuffle} setTotal ={setTotal} handleReset={handleReset}/>
   

  

      </div>
    </div>

  );
}

export default App;
