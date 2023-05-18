import './DonutCounter.css'

function DonutCounter({ total, completed }) {
    return (
      <h1 className="DonutCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }

export { DonutCounter };