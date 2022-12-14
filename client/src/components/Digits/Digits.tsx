import React, { ReactNode } from 'react';

export default function Digits(props: any) {
  function createDigits(): ReactNode {
    let digits: JSX.Element[] = [];
    for (let i = 9; i > 0; i--) {
      digits.push(<button key={i} onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue(`${i}`)}>{i}</button>)
    }
    return <div>{digits}</div>
  };

  return (
    <div className='digits'>
      {createDigits()}
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('.')}>.</button>
      <button className='zero' onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('0')}>0</button>
    </div>
  )
};
