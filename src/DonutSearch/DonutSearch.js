import React from 'react';
import './DonutSearch.css';

function DonutSearch({
    searchValue,
    setSearchValue
}) {

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