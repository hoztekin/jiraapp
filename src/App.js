
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    const createTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }
    ];
    setTasks(createTasks);
  };

  const deleteTaskById =(id)=>{
    const afterDeletingTasks= tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  };
  const editTaskById =(id, updateTitle, updatedTaskDesc)=>{
    const updatedTasks= tasks.map((task)=>{
      if(task.id===id){
return {id, title:updateTitle, taskDesc:updatedTaskDesc}
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
