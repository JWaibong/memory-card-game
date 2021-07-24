import React, { useEffect, useState } from 'react'
import Card from './Card';
import uniqid from 'uniqid';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const shuffleFunction = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return(array.map(ele => ele));
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
const keys = shuffleFunction(Object.keys(images));

  function Cards(props) {
    const {click,handleReset,setTotal} = props;
    let jsx = null;
    const [imageKeys,setImageKeys] = useState(keys);

    useEffect( () => {
      setTotal(imageKeys.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect( () => {
      if(props.causeShuffle){
        setImageKeys(shuffleFunction(imageKeys));
        handleReset();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.causeShuffle]);

    // in cases with a non-emptydependency array, useEffect always calls ONCE after componentDidMount 
    //a.k.a useEffect with an empty dependency array
    // and then after each update to the state afterwards

    jsx = imageKeys.map( path => <Card key={uniqid()} url={images[path]} name={path.split('.')[0]} click={click} totalCards={imageKeys.length}/>)


      return (
        <>

        {jsx}

        </>
      )
  }
  
  export default Cards
  