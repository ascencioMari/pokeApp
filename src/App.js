import { useState } from 'react';
import './App.css';
import { List } from './Components/List';
import { Buttons } from './Components/Buttons';
import { Detail } from './Components/Detail';

export const App = () => {
  const [ countPage, setCountPage ] = useState(0);
  const [ data, setData ] = useState({});
  const [pokeName, setPokeName] = useState('');

  return (
    <section>
      <List data={data} setData={setData} countPage={countPage} setPokeName={setPokeName} />
      <Buttons page={{ countPage, setCountPage }} previous={data.previous} next={data.next}/>
      <Detail pokeName={pokeName}/>
    </section>
  );
}
