import React, { useEffect } from 'react';

import './App.css';
import { useStateValue } from './Context/StateContext';

function App() {
  const { state, getPeople } = useStateValue();

  useEffect(
    getPeople

    , [])
  return (
    <div className="App">
      <h2>Name</h2>
      {state.people.name}

    </div >
  );
}

export default App;
