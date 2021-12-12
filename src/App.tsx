import React from 'react';
import './App.css'
import Burger from './components/leftbar/burger';
import Filter from './components/main/filter';
import Grid from './components/main/grid';

function App() {
  return (
    <div className="App">
      <div className="content" style={{ display: "flex", gap: "20px", width: "100%" }}>
        <Burger />
        <br />
        <div style={{ width: "100%" }}>
          <Filter />
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
