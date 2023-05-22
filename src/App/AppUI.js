import React from 'react';
import { DonutCounter } from '../DonutCounter/DonutCounter';
import { DonutSearch } from '../DonutSearch/DonutSearch';
import { DonutList } from '../DonutList/DonutList';
import { DonutItem } from '../DonutItem/DonutItem';
import { CreateDonutButton } from '../CreateDonutButton/CreateDonutButton';

function AppUI ({
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