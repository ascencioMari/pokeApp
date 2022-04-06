import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { ELEMENTS_PER_PAGE, POKE_API } from '../constants/PokeConst';

export const List = ( {data, setData, countPage, setPokeName} ) => {
    const [ isLoading, setIsLoading ] = useState(true);

    const getData = offset => {
      return fetch(`${POKE_API}?offset=${offset}&limit=${ELEMENTS_PER_PAGE}`)
        .then(response => response.json())
        .then(result => {
          setData(result);
          setIsLoading(false);
        })
        .catch((error)=>console.error('Error:', error));
    }

    const handlePokeName = name => setPokeName(name);
  
    useEffect(()=> {
      getData(countPage);
    },[countPage]); 
  
    if(isLoading) return <Loading />

    return (
        <ul className='grid'>
            {data.results.map(elem => <li key={elem.name}><button onClick={() => handlePokeName(elem.name)}>{elem.name}</button></li>)}
        </ul>
      );
   }
