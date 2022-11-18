import React, { useState } from 'react'

// interface ValueProps {
//   value: string;
//   setValue: string;
// }

export default function ButtonFunctions() {

  const operations: string[] = ['.', '-', '+', '*', '/']

  const [value, setValue] = useState<string>("")

  function updateValue(digit: string) {
    if (operations.includes(digit) && value === "" || operations.includes(digit) && operations.includes(value.slice(-1))) {
      return;
    }
    setValue(value + digit)
  }

  // function clear(): void {
  //   setValue("")
  // }

  // function remove(): void {
  //   setValue(value.slice(0, -1))
  // }

  // function calculate(): void {
  //   // if (!operations.includes(value)) {
  //   //   setValue(eval(value).toString())
  //   // }
  //   setValue(eval(value).toString())
  // }
}
