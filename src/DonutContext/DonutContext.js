import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const DonutContext = React.createContext();

function DonutProvider({ children }) {

    //Creando Donut array
    const {
      item: donuts,
      saveItem: saveDonuts,
      loading,
      error,
    } = useLocalStorage('DONUTS_V1', []);
  
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
  <DonutContext.Provider value={{
    loading,
    error,
    completedDonuts,
    totalDonuts,
    searchValue,
    setSearchValue,
    searchedDonuts,
    completeDonut,
    deleteDonut,
  }}>
    {children}
  </DonutContext.Provider>
  );
}


export { DonutContext, DonutProvider };
