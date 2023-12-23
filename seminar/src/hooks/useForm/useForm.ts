import { useRef } from "react"

export const useForm = () => {
  const values = useRef<{ [key: string]: string }>({})

  const onChangeHandler = (name: string, value: string) => {
    values.current[name] = value
  }

  const submitHandler = () => {
    console.log(values.current)
  }

  return { onChangeHandler, submitHandler }
}