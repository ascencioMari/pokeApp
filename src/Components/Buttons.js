import { ELEMENTS_PER_PAGE } from '../constants/PokeConst';
import { Loading } from './Loading';

export const Buttons = ({ page, previous, next }) => {
    const { countPage, setCountPage } = page;
    const isLoading = !previous && !next;

    const handleCountPage = operator => {
        if(operator === '+') setCountPage( countPage + ELEMENTS_PER_PAGE );
        else setCountPage(countPage && countPage - ELEMENTS_PER_PAGE);
    }
    if(isLoading) return <Loading/>
    
    return (
        <section className='button-section'>
            <button disabled={!previous} onClick={() => handleCountPage('-')}> PREVIOUS </button>
            <button disabled={!next} onClick={() => handleCountPage('+')}> NEXT </button>
        </section>
    );
}
