import React from 'react';
import { DonutCounter } from '../DonutCounter/DonutCounter';
import { DonutSearch } from '../DonutSearch/DonutSearch';
import { DonutList } from '../DonutList/DonutList';
import { DonutItem } from '../DonutItem/DonutItem';
import { CreateDonutButton } from '../CreateDonutButton/CreateDonutButton';
import { DonutContext } from '../DonutContext/DonutContext';
import { Modal } from '../Modal/Modal';
import { DonutAdd } from '../DonutAdd/DonutAdd';

function AppUI () {
    const {
        loading,
        error,
        searchedDonuts,
        completeDonut,
        deleteDonut,
        openModal,
        setOpenModal,
    }= React.useContext(DonutContext);

    return (
        <>
            <DonutCounter />
            <DonutSearch />

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

            <CreateDonutButton 
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <DonutAdd />
                </Modal>
            )}
        </>
    )
}

export { AppUI };
