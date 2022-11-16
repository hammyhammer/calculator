import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <span className='display'>Numbers Display Here</span>
        <div className='buttons'>
          <p className='digits'>1 2 3 4 5 6 7 8 9 0</p>
          <p className='operators'>+ - / *</p>
        </div>
      </div>
    </div>
  );
}

export default App;
