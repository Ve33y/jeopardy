import React from 'react';
import Column from './components/Column';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Column category="A"/>
        <Column category="B"/>
        <Column category="C"/>
        <Column category="D"/>
        <Column category="E"/>
        <Column category="F"/>
      </header>
    </div>
  );
}

export default App;
