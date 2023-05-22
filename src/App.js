import React from "react";
import { DonutCounter } from './DonutCounter';
import { DonutSearch } from './DonutSearch';
import { DonutList } from './DonutList';
import { DonutItem } from './DonutItem';
import { CreateDonutButton } from './CreateDonutButton';
import './App.css';


// const defaultDonuts = [
//   { text:'Cortar Cebolla', completed: true },
//   { text:'Comprar pasajes Canadá', completed: false },
//   { text:'Canción', completed: false },
//   { text:'YOLO', completed: true },
//   { text:'Usar estados derivados, porque aja, hay que hacer salto de linea', completed: true },
// ]

// localStorage.setItem('DONUTS_V1', JSON.stringify(defaultDonuts));


function useLocalStorage(itemName, intialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([intialValue]));
    parsedItem = [intialValue];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  // SAVING donut
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return [item, saveItem];
}

function App() {
  //Creando Donut array
  const [donuts, saveDonuts] = useLocalStorage('DONUTS_V1', []);

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

  // CHECKING donut
  const completeDonut = (text) => {
    const newDonuts = [...donuts];
    const donutIndex = newDonuts.findIndex(
      (donut) => donut.text == text
    );
    newDonuts[donutIndex].completed = !newDonuts[donutIndex].completed;
    saveDonuts(newDonuts);
  }

  // DELETING donut
  const deleteDonut = (text) => {
    const newDonuts = [...donuts];
    const donutIndex = newDonuts.findIndex(
      (donut) => donut.text == text
    );
    newDonuts.splice(donutIndex, 1);
    saveDonuts(newDonuts);
  }


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
          onCompleted={() => completeDonut(donut.text)}
          onDelete={() => deleteDonut(donut.text)}
          />
        ))}
      </DonutList>

      <CreateDonutButton />

    </>
  );
}


export default App;
