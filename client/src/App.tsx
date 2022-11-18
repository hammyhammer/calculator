import React, { MouseEventHandler, ReactElement, useState } from 'react';
import './App.css';

function App() {
  const operations: string[] = ['.', '-', '+', '*', '/']

  const [value, setValue] = useState("")

  function updateValue(digit: string) {
    if (operations.includes(digit) && value === "" || operations.includes(digit) && operations.includes(value.slice(-1))) {
      return;
    }
    setValue(value + digit)
  }

  function clear(): void {
    setValue("")
  }

  function calculate(): void {
    // if (!operations.includes(value)) {
    //   setValue(eval(value).toString())
    // }
    setValue(eval(value).toString())
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='display'>
          {value === "" ? 0 : value}
        </div>

        <div className='functions'>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => clear()}>AC</button>
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
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('/')}>÷</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('*')}>x</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('-')}>-</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('+')}>+</button>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => calculate()}>=</button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
