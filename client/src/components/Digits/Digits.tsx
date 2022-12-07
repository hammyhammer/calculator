import React, { ReactNode } from 'react'
import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';

export default function Digits() {
  const { value, setValue, updateValue } = useButtonFunctions()

  function createDigits(): ReactNode {
    let digits: JSX.Element[] = [];
    for (let i = 9; i > 0; i--) {
      digits.push(<button key={i} onClick={(event: React.MouseEvent<HTMLElement>) => updateValue(`${i}`)}>{i}</button>)
    }
    return <div>{digits}</div>
  }

  return (
    <div className='digits'>
      {createDigits()}
      <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('.')}>.</button>
      <button className='zero' onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('0')}>0</button>
    </div>
  )
}
