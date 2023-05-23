import React from "react";

function useLocalStorage(itemName, intialValue) {

    const [item, setItem] = React.useState(intialValue);
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false); 

    React.useEffect(
        () => {
            setTimeout(() => {
                try {
                    const localStorageItem = localStorage.getItem(itemName);
                    let parsedItem;

                    if (!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify([intialValue]));
                        parsedItem = [intialValue];
                    } else {
                        parsedItem = JSON.parse(localStorageItem);
                        setItem(parsedItem);
                    }
                    setLoading(false);
                } catch(error) {
                    setLoading(false);
                    setError(error);
                }
            }, 1000);
        }, []
    );


// SAVING donut
const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
};
    return {
        item,
        saveItem,
        loading,
        error,
    };
}


export { useLocalStorage };



// localStorage.removeItem('DONUTS_V1');

// const defaultDonuts = [
//   { text:'Cortar Cebolla', completed: true },
//   { text:'Comprar pasajes Canadá', completed: false },
//   { text:'Canción', completed: false },
//   { text:'YOLO', completed: true },
//   { text:'Usar estados derivados, porque aja, hay que hacer salto de linea', completed: true },
// ]

// localStorage.setItem('DONUTS_V1', JSON.stringify(defaultDonuts));