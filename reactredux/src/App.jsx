
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addtoproduct, increment } from './redux/action/addtoproductacton';
import Product from './Product';
import Count from './Count';

function App() {
  const dispatch = useDispatch()
const state = useSelector(state=>state)
console.log(state)


  const productHandle =()=>{
    dispatch(addtoproduct({
      id:1,
      name:'nokia'
    }))
  }
  const hadlecount=()=>{
    dispatch(increment())
  }


  return (
    <>
    <p>joydeb maity</p>
    <button onClick={productHandle}>click</button>

    <button onClick={hadlecount}>count</button>
    <Count/>

    <Product/>
    
    </>
  )
}

export default App
