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