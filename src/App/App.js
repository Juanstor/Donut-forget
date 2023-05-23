import React from "react";
import { DonutProvider } from '../DonutContext/DonutContext'
import { AppUI } from "./AppUI";

function App() {
  return (
    <DonutProvider>
      <AppUI />
    </DonutProvider>
  );
}


export default App;
