import React, { ReactElement } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='display'>
          <span>Numbers Display Here</span>
        </div>

        <div className='functions'>
          <button>AC</button>
          <button>C</button>
          <button>{`()`}</button>
          <button>xⁱ</button>
        </div>

        <div className='operators'>
          <button>÷</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
          <button>=</button>
        </div>

        <div className='digits'>
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
          <button>.</button>


        </div>


      </div>
    </div>
  );
}

export default App;
