import React from "react";

function useLocalStorage(itemName, intialValue) {
    const [item, setItem] = React.useState(parsedItem);


    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;
    
    React.useEffect(() => {
        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([intialValue]));
        parsedItem = [intialValue];
        } else {
        parsedItem = JSON.parse(localStorageItem);
        }
    });


    // SAVING donut
    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    };

    return [item, saveItem];
}


export { useLocalStorage };