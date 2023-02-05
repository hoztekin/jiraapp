import "./App.css";
import TaskCreate from "./components/TaskCreate";

import TaskList from "./components/TaskList";

function App() {

  const createTask = (title, taskdesc) =>{
    console.log(title, taskdesc);
};

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
