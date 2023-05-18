import React from "react";
import { DonutCounter } from './DonutCounter';
import { DonutSearch } from './DonutSearch';
import { DonutList } from './DonutList';
import { DonutItem } from './DonutItem';
import { CreateDonutButton } from './CreateDonutButton';
import './App.css';


function App() {
  return (
    <React.Fragment>

      <DonutCounter completed={12} total={20}/>
      <DonutSearch />

      <DonutList>
        <DonutItem />
        <DonutItem />
        <DonutItem />
      </DonutList>

      <CreateDonutButton />

    </React.Fragment>
  );
}


export default App;
