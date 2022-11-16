import React, { ReactElement } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='display'>
          <span>0</span>
        </div>

        <div className='functions'>
          <button>AC</button>
          <button>C</button>
          <button>{`()`}</button>
          <button>xⁿ</button>
        </div>

        <div className='bottom'>


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
            <button>.</button>
            <button className='zero'>0</button>
          </div>

          <div className='operators'>
            <button>÷</button>
            <button>x</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
