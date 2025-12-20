
import { useState } from 'react'
import './App.css'

function App() {
  const [check, setCheckbox] = useState({
    html: false,
    css: false,
    js: false

  });
  console.log(check)

  const inControlled = (e) => {
    const key = e.target.name;
    setCheckbox({ ...check, [key]: e.target.checked })

    console.log(e.target.name)
  }

  const isAllcheck = Object.values(check).every(item=> item===true)
  console.log(isAllcheck);






  return (
    <>
     {Object.keys(check).map((item)=>{
      return(
         <label key={item} htmlFor={item}>
        <input 
        
        type="checkbox"
         id={item}
         checked={check[item]}
          onChange={inControlled} />
        {item}
      </label>
      )
     })}
      <br />
     


     {/* for selectAll */}
      <label htmlFor="selectAll">
        <input
          name='selectAll'
          type="checkbox"
          id='selectAll'
         checked={isAllcheck}
        onChange={(e)=>{
          setCheckbox({
            html:e.target.checked,
            css:e.target.checked,
            js:e.target.checked

          })

        }}
        />
        selectAll
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
