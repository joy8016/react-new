import React from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import ProgressTracker from './components/ProgressTracker'

const App = () => {
  return (
    <div>
      <header>
        <h1>Taskbuddy</h1>
        <p>Your friendly task manger</p>
      </header>
      <Taskform/>
      <Tasklist/>
      <ProgressTracker/>
      
    </div>
  )
}

export default App
