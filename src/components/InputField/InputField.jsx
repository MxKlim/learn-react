import styled from './InputField.module.scss'
function InputField({label, type, value, onChange, refer}) {
  return (
    <label className={styled.label_text}>
      {label}
      <input
        ref={refer}
        className={styled.input_text}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default InputField