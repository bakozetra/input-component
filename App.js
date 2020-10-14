import React from 'react'
import Input from './input'
function App () {
  return (
<main>
  <div>
    <Input 
     type="text"
     name="default"
      />
    <Input 
      type="text"
      name="hover"
      hover />
    <Input  
      type="text"
      name="focus"
      focus />
  </div>
  <div>
    <Input error
    type="text"
    name="error"
    value= ''
    focus />
    <Input 
    type="text"
    name="error-hover"
    value= ''
    />
    <Input 
     type="text"
     name="error-focus"
     value= ''
    error focus />
  </div>
  <div>
    <Input disabled />
  </div>
  <div>
    <Input 
     type="text"
     name="helpertext"
     value= ''
     helperText = "some interesting text"/>
    <small>some interesting text</small>
    <Input 
     type="text"
     name ="helpertext"
     value = ''
     helperText="some interesting text"
     ></Input>
    <small>some interesting text</small>
  </div>
  <div>
    <Input 
     type="text"
     name="error"
     value= ''
    startIcon = 'call'/>
    <Input endIcon = ''/>
  </div>
  <div>
    <Input 
     type="text"
     value ="text" />
  </div>
  <div>
    <Input 
     type="text"
     value= ''
     size ='sm'/>
    <Input 
     type="text"
     size ='md'/>
  </div>
  <div>
    <Input 
     type="text"
     fullWidth/>
  </div>
  <div>
    <Input
     type="text"
     value= ''/>
    <Input
     type="text"
     value= ''
     />
  </div>
</main>
  )
}
export default App;
