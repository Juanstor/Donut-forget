import React from "react";

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


export { useLocalStorage };