import React from 'react';
import './App.css';
import { Time } from './Components/Time';
import { Links } from './Components/Links';
import States from './Context/States'


function App() {


  return (
    <States>
      <div className="App">
        <Time />
        <Links />
      </div>
    </States>
  );
}

export default App;
