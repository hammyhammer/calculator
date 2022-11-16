import React, { ReactElement } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <span className='display'>Numbers Display Here</span>
        <div className='buttons'>
          <p className='digits'>
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>6</button>
            <button>5</button>
            <button>4</button>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button>0</button>

          </p>
          <p className='operators'>
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button>xⁱ</button>
            <button>=</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
