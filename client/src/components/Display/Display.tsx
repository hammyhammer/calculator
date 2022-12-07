import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';

export default function Display() {
  const { value } = useButtonFunctions()
  return (
    <div className='display'>
      {value === "" ? 0 : value}
    </div>

  )
}
