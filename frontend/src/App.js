import React from 'react'
import{Route,Routes} from 'react-router-dom'
import TodoList from './component/TodoList'


const App = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<TodoList/>} />
    </Routes>
  
  
  )

 
}

export default App