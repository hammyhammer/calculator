import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';

export default function Display(props: any) {
  return (
    <div className='display'>
      {props.value === "" ? 0 : props.value}
    </div>

  )
}
