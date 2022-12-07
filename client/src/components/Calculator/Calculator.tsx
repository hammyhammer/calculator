import React, { ReactNode } from 'react';
import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';
import Display from '../Display/Display';
import Digits from '../Digits/Digits';

export default function Buttons() {
  const { value, updateValue, clear, calculate } = useButtonFunctions()

  return (
    <div className='container'>
      <Display value={value} />
      <div className='functions'>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => clear()}>AC</button>
        {/* <button onClick={(event: React.MouseEvent<HTMLElement>) => remove()}>C</button> */}
        <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('*(')}>{`(`}</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(')')}>{`)`}</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('**')}>xⁿ</button>
      </div>

      <div className='bottom'>
        <Digits updateValue={updateValue} />

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
