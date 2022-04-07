import InputField from "../InputField";
import styled from './Form.module.scss'
import Button from "../Button";
import { useRef } from "react";

function Form() {
  const controlInput = useRef()
  return (
    <form className={styled.form_text}>
      <InputField 
        label={ 'Input 1'}
        type={'text'}
        onChange={(e) => {
          console.log(e.target.value)
        }}

      />
       <InputField 
        label={ 'Input 2'}
        type={'text'}
        refer={controlInput}
      />
      <Button
        handleClick={(e) => {
          e.preventDefault()
          console.log(controlInput.current.value)
        }}
      > 
        Отправить 
      </Button>
    </form>
  )
}

export default Form