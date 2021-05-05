import React from "react";
import Pokedex from './Pokedex';
import items from './items';
import moreItems from './moreItems';
import './App.css';

function App() {
  return (
    <>
      <Pokedex items={items} username="Row 1" />
      <Pokedex items={moreItems} username="Row 2" />
    </>
  );
};

export default App;
