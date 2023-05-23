import React from 'react';
import './DonutSearch.css';
import { DonutContext } from '../DonutContext/DonutContext';

function DonutSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(DonutContext);
    
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