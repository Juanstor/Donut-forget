import React from 'react';
import { DonutContext } from '../DonutContext/DonutContext';
import './DonutCounter.css'

function DonutCounter() {
    const {
      completedDonuts,
      totalDonuts,
    } = React.useContext(DonutContext);

    return (
      <h1 className="DonutCounter">
        Has completado <span>{completedDonuts}</span> de <span>{totalDonuts}</span> Donuts
      </h1>
    );
  }

export { DonutCounter };