import React from "react";
import { DonutCounter } from './DonutCounter';
import { DonutSearch } from './DonutSearch';
import { DonutList } from './DonutList';
import { DonutItem } from './DonutItem';
import { CreateDonutButton } from './CreateDonutButton';
import './App.css';

const defaultDonuts = [
  { text:'Cortar Cebolla', completed: true },
  { text:'Comprar pasajes Canadá', completed: false },
  { text:'Canción', completed: false },
  { text:'YOLO', completed: true },
  { text:'Usar estados derivados, porque aja, hay que hacer salto de linea', completed: true },
]

function App() {

  //Creando Donut array
  const [donuts, setDonuts] = React.useState(defaultDonuts);

  //Obteniendo string del Search
  const [searchValue, setSearchValue] = React.useState('');

  //Contando Donuts
  const completedDonuts = donuts.filter(
    donut => !!donut.completed
    ).length;
  const totalDonuts = donuts.length;

  //Obitene el string del search y filtra (Estado derivado)
  const searchedDonuts = donuts.filter(
    (donut) => {
      
      // función texto sin tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

      // Normalizando texto sin tildes y a Lower Case
      const donutTextLC = noTildes(donut.text.toLowerCase());
      const searchTextLC = noTildes(searchValue.toLowerCase());

      //renderizar con filtro
      return donutTextLC.includes(searchTextLC);
    }
  );

  return (
    <>

      <DonutCounter
        completed={completedDonuts}
        total={totalDonuts}
      />

      <DonutSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <DonutList>
        {searchedDonuts.map(donut => (
          <DonutItem 
          key={donut.text}
          text={donut.text}
          completed={donut.completed}
          />
        ))}
      </DonutList>

      <CreateDonutButton />

    </>
  );
}


export default App;
