import './DonutCounter.css'

function DonutCounter({ total, completed }) {
    return (
      <h1 className="DonutCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> Donuts
      </h1>
    );
  }

export { DonutCounter };