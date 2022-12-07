export default function Operators(props: any) {
  return (
    <div className='operators'>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('/')}>÷</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('*')}>x</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('-')}>-</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('+')}>+</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.calculate()}>=</button>
    </div>
  )
};
