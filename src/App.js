import React from "react";
import { DonutCounter } from './DonutCounter';
import { DonutSearch } from './DonutSearch';
import { DonutList } from './DonutList';
import { DonutItem } from './DonutItem';
import { CreateDonutButton } from './CreateDonutButton';
import './App.css';

const defaultDonuts = [
  { text:'Cortar Cebolla', completed: true },
  { text:'Comprar pasajes Canadá', completed: false },
  { text:'Planear viajes Neiva', completed: false },
  { text:'YOLO', completed: false },
]


function App() {
  return (
    <>

      <DonutCounter completed={12} total={20}/>
      <DonutSearch />

      <DonutList>
        {defaultDonuts.map(donut => (
          <DonutItem 
          key={donut.text}
          text={donut.text}
          completed={donut.completed}
          />
        ))}
      </DonutList>

      <CreateDonutButton />

    </>
  );
}


export default App;
