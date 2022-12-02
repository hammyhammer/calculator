import { useState } from 'react'


export default function ButtonFunctions() {
  const operations: string[] = ['.', '-', '+', '*', '/']

  const [value, setValue] = useState<string>("")

  function updateValue(digit: string) {
    if (operations.includes(digit) && operations.includes(value.slice(-1)) || operations.includes(digit) && value === "") {
      return;
    }
    setValue(value + digit)
  }

  function clear(): void {
    setValue("")
  }

  function calculate(): void {
    if (operations.includes(value.slice(-1))) {
      setValue("ERR")
    }
    if (value === "ERR") {
      clear()
    }
    else if (!operations.includes(value)) {
      setValue(eval(value).toString())
    }
    console.log(value)
    // setValue(eval(value).toString())
  }


  return (
    <div>ButtonFunctions</div>
  )
}


// import React, { useState } from 'react';

// // interface ValueProps {
// //   value: string;
// //   setValue: string;
// // }

// export default function ButtonFunctions() {

//   const operations: string[] = ['.', '-', '+', '*', '/']

//   const [value, setValue] = useState("")

//   function updateValue(digit: string) {
//     if (operations.includes(digit) && value === "" || operations.includes(digit) && operations.includes(value.slice(-1))) {
//       return;
//     }
//     setValue(value + digit)
//     console.log("clicked")
//   }

//   function clear(): void {
//     setValue("")
//   }

//   function remove(): void {
//     setValue(value.slice(0, -1))
//   }

//   function calculate(): void {
//     // if (!operations.includes(value)) {
//     //   setValue(eval(value).toString())
//     // }
//     setValue(eval(value).toString())
//   }
//   return (
//     <div>
//       <div className='bottom'>

//         <div className='digits'>
//           {/* {return (
//               createDigits().map(digit => {

//             })
//             )} */}
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('9')}>9</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('8')}>8</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('7')}>7</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('6')}>6</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('5')}>5</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('4')}>4</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('3')}>3</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('2')}>2</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('1')}>1</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('.')}>.</button>
//           <button className='zero' onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('0')}>0</button>
//         </div>

//         <div className='operators'>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('/')}>÷</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('*')}>x</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('-')}>-</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => updateValue('+')}>+</button>
//           <button onClick={(event: React.MouseEvent<HTMLElement>) => calculate()}>=</button>
//         </div>
//       </div>
//     </div>
//   )
// }

