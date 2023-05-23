import React from "react";
import { DonutContext } from '../DonutContext/DonutContext';
import './DonutAdd.css';

function DonutAdd() {
  const {
    addDonut,
    setOpenModal,
  } = React.useContext(DonutContext);

  const [newDonutValue, setNewDonutValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addDonut(newDonutValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewDonutValue(event.target.value);
  }



  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Donut</label>
      <textarea 
        placeholder="Comer todas mis Donuts para ser productivo."
        value={newDonutValue}
        onChange={onChange}
      />
      <div className="DonutAdd-buttonContainer">
        <button
          type='button'
          className="DonutAdd-button DonutAdd-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type='button'
          className="DonutAdd-button DonutAdd-button--add"
          onClick={onSubmit}
        >Añadir</button>
      </div>
    </form>
  )
}

export { DonutAdd };