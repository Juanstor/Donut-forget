import React from 'react';
import { DonutCounter } from '../DonutCounter/DonutCounter';
import { DonutSearch } from '../DonutSearch/DonutSearch';
import { DonutList } from '../DonutList/DonutList';
import { DonutItem } from '../DonutItem/DonutItem';
import { CreateDonutButton } from '../CreateDonutButton/CreateDonutButton';

function AppUI ({
    loading,
    error,
    completedDonuts,
    totalDonuts,
    searchValue,
    setSearchValue,
    searchedDonuts,
    completeDonut,
    deleteDonut,

}) {
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
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un ERROR!</p>}
                {(!loading && searchedDonuts.lenght === 0) && <p>Hubo un ERROR!</p>}


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
    )
}

export { AppUI };