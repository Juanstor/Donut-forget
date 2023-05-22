import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from './useLocalStorage';

// const defaultDonuts = [
//   { text:'Cortar Cebolla', completed: true },
//   { text:'Comprar pasajes Canadá', completed: false },
//   { text:'Canción', completed: false },
//   { text:'YOLO', completed: true },
//   { text:'Usar estados derivados, porque aja, hay que hacer salto de linea', completed: true },
// ]

// localStorage.setItem('DONUTS_V1', JSON.stringify(defaultDonuts));


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
      (donut) => donut.text === text
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
    <AppUI 
    completedDonuts={completedDonuts}
    totalDonuts={totalDonuts}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedDonuts={searchedDonuts}
    completeDonut={completeDonut}
    deleteDonut={deleteDonut}
    />
  );
}


export default App;
