import React from 'react'
import './style.css'

function  Input (props) {
  let inputclasses = props.size ? `input input--${props.size}`:'input';
  if (props.error) {
    inputclasses = `${props.error}`
  }
  else if (props.helperText) {
    inputclasses = `${props.helperText}`
  }
  else if (props.value) {
    inputclasses = `${inputclasses} ${props.value}`
  }
  else if (props.size) {
    inputclasses = `${inputclasses} ${props.size}`
  }
  else if (props.hover) {
    inputclasses = `input--hover`
  } 
  else if (props.error && props.hover) {
    inputclasses = `input--hover`
  }
  else if (props.error && props.focus) {
    inputclasses = `input--focus` 
  }
  return (
  <label>
    Label <br/>
     <input className = {inputclasses} placeholder = 'placeholder' disabled={props.disabled}/>
  </label>
  )
}
export default Input;
