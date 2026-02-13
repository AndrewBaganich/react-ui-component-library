// import { useState } from 'react'
import styles from './Input.module.css'
import { useState } from 'react'

export type InputProps = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  type?: 'text' | 'password' | 'number'
  clearable?: boolean
  disabled?: boolean
  label?: string
  error?: string
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState(props.defaultValue ?? "")
  const isControlled = props.value !== undefined
  const currentValue = isControlled ? props.value : value

  return (
    <div className={styles.inputContainer}>

      <input 
        className={styles.input}
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type}
        value={currentValue}

        onChange={(e) => {
          const newValue = e.target.value

          if(!isControlled){
            setValue(newValue)
          }

          props.onChange?.(newValue)
        }}

        />

    </div>
  )
}