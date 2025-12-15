
import { useState } from 'react'
import './App.css'

function App() {
  const [check, setCheckbox]=useState({
    html:false,
    css:false,
    js:false

  });
  console.log(check)

  const inControlled=(e)=>{
    const key = e.target.name;
    setCheckbox({...check, [key]:e.target.checked})
    
    console.log(e.target.name)
  }
return(
  <>
  <label htmlFor="html">
    <input name='html' type="checkbox" id='html' checked={check.html} onChange={inControlled} />
    html
  </label>
  <br />
  <label htmlFor="css">
    <input name='css' type="checkbox" id='css' checked={check.css} onChange={inControlled} />
    css
  </label>
  <br />
  <label htmlFor="js">
    <input name='js' type="checkbox" id='js' checked={check.js} onChange={inControlled} />
    js
  </label>
  <br />

  {check.html && 'html selected'}
  <br />
  {check.css && 'css selected'}
  <br />
  {check.js && 'js selected'}
  
  
  </>
)




}

export default App
