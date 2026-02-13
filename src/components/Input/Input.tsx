// import { useState } from 'react'
import styles from './Input.module.css'
import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

export type InputProps = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  type?: 'text' | 'password'
  clearable?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}


export const Input = (props: InputProps) => {
  const size = props.size ?? 'md'
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState(props.defaultValue ?? "")
  const isControlled = props.value !== undefined
  const currentValue = isControlled ? props.value : value

  const hendleClear = ()=>{
    if(!isControlled){
      setValue("")
    }

    props.onChange?.("")
  }

  const inputType = props.type === "password" && showPassword ? "text" : props.type

  return (
    <div className={styles.inputContainer}>

      <input 
        className={`${styles.input} ${styles[size]}`}
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={inputType}
        value={currentValue}

        onChange={(e) => {
          const newValue = e.target.value
          !isControlled && setValue(newValue)
          props.onChange?.(newValue)
        }}

        />

        {props.clearable && currentValue && (
          <button 
          type='button'
          onClick={hendleClear}
          className={styles.clearButton}
          >X</button>
        )}

        {props.type === "password" && (
          <button
            type='button'
            onClick={()=>setShowPassword(!showPassword)}
            className={styles.eyeButton}
          >
            {showPassword ? <Eye size ={16}/> : <EyeClosed size={16}/> }
          </button>
        )}


    </div>
  )
}