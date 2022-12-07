import useButtonFunctions from '../../hooks/ButtonFunctions/useButtonFunctions';
import Display from '../Display/Display';
import Digits from '../Digits/Digits';
import Functions from '../Functions/Functions';
import Operators from '../Operators/Operators';

export default function Buttons() {
  const { value, updateValue, clear, calculate } = useButtonFunctions()

  return (
    <div className='container'>
      <Display value={value} />
      <Functions updateValue={updateValue} clear={clear} />

      <div className='bottom'>
        <Digits updateValue={updateValue} />
        <Operators updateValue={updateValue} calculate={calculate} />
      </div>
    </div>
  )
}
