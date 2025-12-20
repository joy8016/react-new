
import { useState } from 'react'
import './App.css'

function App() {
  const [check, setCheckbox] = useState({
    email: '',
    tc: false


  });
  console.log(check)

  const inControlled = (e) => {
    const { name, checked, type, value } = e.target;
    setCheckbox({
      ...check, [name]: type === 'checkbox' ? checked : value

    })

    // console.log(e.target.name)
  }

  function hadleSubmit(e){
    e.preventDefault()
    

  }








  return (
    <>
      <form onSubmit={hadleSubmit}>
        <input type="email"
          placeholder='enter email'
          name='email'
          onChange={inControlled}
          value={check.email} />
        <br />


        <label htmlFor='tc'>
          <input
            name='tc'

            type="checkbox"
            id='tc'
            checked={check.tc}
            onChange={inControlled} />
          Terms & Conditons
        </label>

        <br />



        {/* for selectAll */}
        <label htmlFor="selectAll">
          <input
            name='selectAll'
            type="checkbox"
            id='selectAll'

          />
          selectAll
        </label>
        <button type="submit">submit</button>
      </form>


    </>
  )




}

export default App
