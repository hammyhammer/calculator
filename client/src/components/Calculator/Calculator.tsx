import React, { ReactNode } from 'react';
import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';
import Display from '../Display/Display';

export default function Buttons() {
  const { value, updateValue, clear, calculate } = useButtonFunctions()
  function createDigits(): ReactNode {
    let digits: JSX.Element[] = [];
    for (let i = 9; i > 0; i--) {
      digits.push(<button key={i} onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(`${i}`)}>{i}</button>)
    }
    return <div>{digits}</div>
  }

  return (
    <div className='container'>
      {/* <Display value={value} /> */}

      <div className='display'>
        {value === "" ? "0" : value}
      </div>
      <div className='functions'>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => clear()}>AC</button>
        {/* <button onClick={(event: React.MouseEvent<HTMLElement>) => remove()}>C</button> */}
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
    </div>
  )
}
