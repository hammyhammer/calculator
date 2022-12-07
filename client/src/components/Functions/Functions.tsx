export default function Functions(props: any) {
  return (
    <div className='functions'>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.clear()}>AC</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('*(')}>{`(`}</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue(')')}>{`)`}</button>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => props.updateValue('**')}>xⁿ</button>
    </div>
  )
};
