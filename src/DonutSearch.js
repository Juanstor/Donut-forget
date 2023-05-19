import React from 'react';
import './DonutSearch.css';

function DonutSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Usuario escribió: ' + searchValue);

    return (
        <input 
            placeholder="Go to Canada" 
            className="DonutSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { DonutSearch };