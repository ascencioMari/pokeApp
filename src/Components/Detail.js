import { useState, useEffect } from 'react';
import { POKE_API, NUMBER_OF_MOVES } from '../constants/PokeConst';
import { Loading } from './Loading';

export const Detail = ({ pokeName }) => {
    const [ detail, setDetail ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    const getDetails = name => {
        if(name) return fetch(`${POKE_API}${name}`)
                    .then(response => response.json())
                    .then( result => {
                        setDetail(result);
                        setIsLoading(false);
                    })
                    .catch(error=>console.error('Error ',error));
    }

    useEffect(() => {
        setIsLoading(true);
        getDetails(pokeName);
    },[pokeName]);

    const getMovesLimit = (moves,numberOfElements) => moves && moves.slice(0, numberOfElements);

    const printMoves = moves => {
        
        if(moves){
            const newMoves = getMovesLimit(moves,NUMBER_OF_MOVES);
            return (
                <section>
                    <h4>Moves: </h4>
                    <ul>
                        {newMoves.map(element => <li key={element.move.name}>{element.move.name}</li>)}
                    </ul>
                </section>
            );
        }

        return false;
    };

    const handleCloseDialog = (element) => {
        //dialog state
    }

    const printDetail = detail => {
        
        const image = detail.sprites.front_default;
        
        return (
            <ul>
                <li key={detail.name}>Name: {detail.name}</li>
                <img src={image} alt='sprite'/>
                <li key={detail.height}>Height: {detail.height}</li>
                <li key={detail.weight}>weight: {detail.weight}</li>
                {printMoves(detail.moves)}
            </ul>
        );
    }

   if(pokeName) return (
        <dialog open>
            {isLoading ? <Loading /> : printDetail(detail)}
            <button onClick={() => handleCloseDialog()}>Close</button>
        </dialog>
    );

    return false;
}
