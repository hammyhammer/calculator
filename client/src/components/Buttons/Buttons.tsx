import React, { ReactNode } from 'react';

interface ButtonFunctionsProps {
  value: string,
  clear(): void,
  updateValue(): string,
  calculate(): void,
}

export default function Buttons(props: ButtonFunctionsProps) {

  // function createDigits(): ReactNode {
  //   let digits: JSX.Element[] = [];
  //   for (let i = 9; i > 0; i--) {
  //     digits.push(<button key={i} onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(`${i}`)}>{i}</button>)
  //   }
  //   return <div>{digits}</div>
  // }

  return (
    <div className='container'>
      <div className='display'>
        {props.value === "" ? 0 : props.value}
      </div>

      <div className='functions'>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => props.clear()}>AC</button>
        {/* <button onClick={(event: React.MouseEvent<HTMLElement>) => remove()}>C</button> */}
        <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('*(')}>{`(`}</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue(')')}>{`)`}</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('**')}>xⁿ</button>
      </div>

      <div className='bottom'>
        <div className='digits'>
          {createDigits()}
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('.')}>.</button>
          <button className='zero' onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('0')}>0</button>
        </div>

        <div className='operators'>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('/')}>÷</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('*')}>x</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('-')}>-</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('+')}>+</button>
          <button onClick={(event: React.MouseEvent<HTMLElement>) => props.calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}
