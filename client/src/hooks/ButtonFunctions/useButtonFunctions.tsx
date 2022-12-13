import { useState } from 'react';

export default function useButtonFunctions() {
  const operations: string[] = ['.', '-', '+', '*', '/']

  const [value, setValue] = useState<string>("")

  function updateValue(digit: string): void {
    if (operations.includes(digit) && operations.includes(value.slice(-1)) || operations.includes(digit) && value === "") {
      return;
    }
    setValue(value + digit)
  }

  function clear(): void {
    setValue("")
  }

  function calculate(): void {
    try {
      if (!operations.includes(value)) {
        setValue(eval(value).toString())
      }
    } catch (error) {
      alert("You messed up")
    }
  }
  return { value, setValue, updateValue, clear, calculate }
};
