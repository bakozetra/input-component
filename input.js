import React from 'react'
import './style.css'

function  Input (props) {
  let classes = " ";
   if(props.text) {
     classes = `${props.text}`
   }
   else if (props.name) {
    classes = `${props.name}`
   }
   else if (props.size) {
    classes = `${props.size}`
   }
   else if (props.helperText) {
     classes = `${props.helperText}`
   }
  return(
   
      <label>Label
        <br/>
         <input className = {classes} placeholder = 'placeholder' disabled={props.disabled}/>
        </label>
     
  
    
  )
}
export default Input;
