import React from 'react'
import Input from './input'
function App () {
   return (
<main>
  <div>
    <Input  />
    <Input hover />
    <Input  focus />
  </div>
  <div>
    <Input error />
    <Input hover />
    <Input error focus />
  </div>
  <div>
    <Input disabled />
  </div>
  <div>
    <Input helperText="some interesting text"/>
    <br/><small>some interesting text</small>
  </div>
  <div>
    <Input startIcon = 'call'/>
    <Input endIcon = ''/>
  </div>
  <div>
    <Input value ="text" />
  </div>
  <div>
    <Input size ='sm'/>
    <Input size ='md'/>
  </div>
  <div>
    <Input fullWidth/>
  </div>
  <div>
    <Input/>
    <Input/>
  </div>
</main>
  )
}
export default App;