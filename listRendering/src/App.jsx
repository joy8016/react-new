
import './App.css'
import UserCard from './components/UserCard';

 

function App() {
  // const names = ['apple', 'orange', 'grapes', 'pineapple', 'lichi'];

  const arr =[
    {id:1, name:'joydeb', age:23},
    {id:2, name:'sagar', age:43},
    {id:3, name:'ajay', age:26},
    {id:4, name:'joydeb', age:3},
    {id:5, name:'sagar', age:4},
    {id:6, name:'ajay', age:6},
  ];


  // const arr = [
  //   ['html', 'css', 'javascript'],
  //   ['react', 'mongodb', 'node.js']
  // ];


 

  return (
    <>
    {/* rendering components with .map() */}
    {
      arr.map((items)=>{
        return(
          // items.age>18 && <UserCard key={items.id} userDetails={items}/>
         <UserCard key={items.id} userDetails={items}/>
        )
      })
    }
















    {/* array with array */}
    {/* {
      arr.map((items , index)=>{
        return(
          <div key={index}>

          {
            items.map((nestedItems, index)=>{
              return(
                // <h2 key={index}>{nestedItems}</h2>
                <UserCard key={index} userDetails={nestedItems}/>

              )
            })
          }
          </div>
        )
      })
    } */}















    {/* <ul>
      {
        names.map((names, index)=>{
         return <h1 key={index}>{names}</h1>

})
      }
    </ul> */}

    {/* {
      arr.map((items )=>{
        console.log(items);
        return(
         <div style={{backgroundColor:'red', padding:'2em', margin:'1em'}}>
          <h1>{items.id}</h1>
          <h1>{items.name}</h1>
          <h1>{items.age}</h1>
         </div>
        )

       })
    } */}



   
      
    </>
  )
}

export default App
