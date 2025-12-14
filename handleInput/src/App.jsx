import { useState } from 'react'
import './App.css'
import Controlled from './components/Controlled';
const App = () => {
  //   const [name, setName]=useState('');
  //   const [email, setEmail]=useState('');

  //  const nameHandler=(e)=>{
  //  setName(e.target.value);
  //  }
  //  const emailHandler=(e)=>{
  //   setEmail(e.target.value);
  //  }

  // single sate for multiple input handler
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumebr: ''

  })
console.log(data)
  // single inputHandler functioin for multiple input handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
  
    setData({ ...data, [name]: value })
  }

  const clear=()=>{
    setData({
      name:'',
      email:'',
      phoneNumebr:''
    })
  }

  return (
    <div>
      <input
        value={data.name}
        type='text'
        name='name'
        placeholder='enter name'
        onChange={inputHandler} />


      <br /><br />

      <input
        value={data.email}
        type="text"
        name='email'
        placeholder='enter email'
        onChange={inputHandler} />
        <br /><br />
      <input
        value={data.phoneNumebr}
        type="number"
        name='phoneNumebr'
        placeholder='enter phonenumber'
        onChange={inputHandler} />
      <br /><br />

      <button onClick={clear}>clear</button>

      <p className='bg-red-600 m-2 rounded-2xl'>{data.name}</p>
      <p className='bg-red-600 m-2 rounded-2xl'>{data.email}</p>
      <p className='bg-red-600 m-2 rounded-2xl'>{data.phoneNumebr}</p>
      {/* <Controlled /> */}

    </div>
  )
}

export default App
