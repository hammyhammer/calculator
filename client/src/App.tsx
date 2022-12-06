import './App.css';
import React, { ReactNode, useState } from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  // let test: ButtonFunctionsProps
  // interface ButtonFunctionsProps {
  //   value: string,
  //   clear(): void,
  //   updateValue(digit: string): string,
  //   calculate(): void,
  // }


  // const operations: string[] = ['.', '-', '+', '*', '/']

  // const [value, setValue] = useState<string>("")

  // function updateValue(digit: string) {
  //   if (operations.includes(digit) && operations.includes(value.slice(-1)) || operations.includes(digit) && value === "") {
  //     return;
  //   }
  //   setValue(value + digit)
  // }

  // function clear(): void {
  //   setValue("")
  // }

  // function remove(): void {
  //   setValue(value.slice(0, -1))
  // }

  // function calculate(): void {
  //   if (operations.includes(value.slice(-1))) {
  //     setValue("ERR")
  //   }
  //   if (value === "ERR") {
  //     clear()
  //   }
  //   else if (!operations.includes(value)) {
  //     setValue(eval(value).toString())
  //   }
  //   console.log(value)
  //   // setValue(eval(value).toString())
  // }

  // function createDigits(): ReactNode {
  //   let digits: JSX.Element[] = [];
  //   for (let i = 9; i > 0; i--) {
  //     digits.push(<button key={i} onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(`${i}`)}>{i}</button>)
  //   }
  //   return <div>{digits}</div>
  // }

  return (

    <div className="App">
      <Calculator />
      {/* <div className='container'>
        <div className='display'>
          {value === "" ? 0 : value}
        </div>

        <div className='functions'>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => clear()}>AC</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('*(')}>{`(`}</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(')')}>{`)`}</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('**')}>xⁿ</button>
        </div>

        <div className='bottom'>
          <div className='digits'>
            {createDigits()}
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
      </div> */}
    </div>
  );
}

export default App;
