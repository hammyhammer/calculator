import React, { MouseEventHandler, ReactElement, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("0")
  // const [test, setTest] = useState('')
  function updateValue(digit: string) {
    setValue(value + digit)
  }


  return (
    <div className="App">
      <div className='container'>
        <div className='display'>
          <span>
            {value}
          </span>
        </div>

        <div className='functions'>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => setValue}>AC</button>
          <button>C</button>
          <button>{`()`}</button>
          <button>xⁿ</button>
        </div>

        <div className='bottom'>


          <div className='digits'>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('9')}>9</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('8')}>8</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('7')}>7</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('6')}>6</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('5')}>5</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('4')}>4</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('3')}>3</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('2')}>2</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('1')}>1</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('.')}>.</button>
            <button className='zero' onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('0')}>0</button>
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
