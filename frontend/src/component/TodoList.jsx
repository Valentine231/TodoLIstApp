import React,{ useState } from 'react'


const TodoList = () => { 
  const [tasks, setTasks] = useState([]);
  const [newtask, setnewTask] = useState('');
  
  const handleInputchange = (e) => {
      setnewTask(e.target.value)
  }

  const addTask = () => {

    if (newtask !=='') {
  
      setTasks(t => [...t, newtask])
      setnewTask('')
    }
  }
  const deleteTask = (index) => {
    const updated = tasks.filter((task, i) => i !== index)
    setTasks(updated)
  }

  const moveTaskup = (index) => { 
    if (index > 0) {
      const updated = [...tasks];
      [updated[index], updated[index - 1]] =
        [updated[index - 1], updated[index]]
      setTasks(updated)
    }
  }

  const moveTaskDown = (index) => { 
    if (index < tasks.length - 1){
      const updated = [...tasks];
      [updated[index], updated[index + 1]] =
        [updated[index + 1], updated[index]]
      setTasks(updated)
    }
  }
  


  return (
    <>
    <div className='todolist'>
        <h1>To-Do-List</h1>
        
      <div>
        <input
          type="text"
          placeholder='enter task...'
          value={newtask}
          onChange={handleInputchange} />
        <button
          className='add-button'
          onClick={addTask}>
          Add 
        </button>
        </div>
        
        <ol>
          {tasks.map((task , index) => 
             
            <li key={index}>
              <span className='text'>{(task)}</span>
              <button
                className='delete-button'
                onClick={() => deleteTask(index)}
              
              >
                delete
              </button>

              <button
                className='move-button'
                onClick={() => moveTaskup(index)}
              
              >
                up
              </button>   <button
                className='down-button'
                onClick={() => moveTaskDown(index)}
              
              >
                down
              </button>


             </li>
        
          )}
        </ol>
    </div>

      </>
  )
}

export default TodoList
