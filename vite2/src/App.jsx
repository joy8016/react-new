import { Component } from 'react';
import './App.css'
import Card from './components/Card';


// function Square(props){
//   return(
//     <div className="square">
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   )
// }


// class Square extends Component{
//   render(props){
//     return(
//     <div className="square">
//       <h1>{this.props.name}</h1>
//       <h1>{this.props.age}</h1>
//     </div>
//   )
//   }
// }

function App() {


  return (
    <>
      {/* <h1>hello joy</h1>
     <Square age={23} name="joydeb" /> */}

      <div className="grid">
        <Card title="first Title" description="first description"/>
        <Card title="second Title" description="first description"/>
        <Card title="third Title" description="first description"/>
        <Card title="fourth Title" description="first description"/>
        <Card title="five Title" description="first description"/>
      </div>

    </>

  )
}

export default App
