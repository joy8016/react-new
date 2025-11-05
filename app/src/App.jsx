import Header from './Header'
import './App.css'
import React from 'react'

function App() {
  //   let name = "joydeb maity"

  //   function greet(){
  //     return "how are you?";
  //   }
  //   let age = 129;

  // let arr = ["iron man","thor", "spider-man", "hulk"];



  //assign it to variables

  // let you = <h1>hello brother, this is {2+2} you</h1>




const user ={
  name:'joydeb maity',
  age:23,
}



  return (
    <>
      {/* <h1>hello {name} {greet()} {7+8} </h1>

      <h1>{age>=18?"you can drive": "you can't drive"}</h1> */}

      {/* {arr.map(function(ele){
        return <h1>{ele}</h1>;
      })} */}

      {/* {you}; */}






      {/* pass as props */}
      {/* <Header name="joydeb" title="maity"/> */}




      {/* use react.createElement */}

      {/* {React.createElement('h1', {className: 'heading', style:{
        backgroundColor:'red',
      }}, 'hello')} */}


      {/* {React.createElement('h1', {className: 'heading', style:{background:'red'}}, "Hello how are you")} */}


      {/*       
       <div>
        <p >hello</p>
       </div> */}

      {/* {React.createElement('div', null, React.createElement('p', 'hello'))} */}



      {/*  */}
      {/* {React.createElement(
        'h1',
        {className: 'heading', style: {backgroundColor:'red', color:'black', fontSize:'30vh'}},
        'hello, muskan'

      )} */}


{/* 
      {React.createElement(
        'div',
        { className: 'card' },
        
        React.createElement('h1', null, `hello ${user.name}`),
        React.createElement('p', null, `you are ${user.age +1} years old`)
          


      )} */}

      {React.createElement('div', {className:'alpha' , style:{color:'red', fontSize:'200px', backgroundColor:'pink'}}, 'hello')}


    </>
  )
}

export default App
