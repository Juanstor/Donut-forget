import './DonutCounter.css'

function DonutCounter({ total, completed}) {
    
    return (
        <h1>
            Has completado {completed} de {total} Donuts
        </h1>
    );
}

export { DonutCounter };