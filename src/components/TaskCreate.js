import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, settitle] = useState(task? task.title:'');
  const [taskdesc, settaskdesc] = useState(task? task.taskDesc:'');

  const handleChange = (event) => {
    settitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    settaskdesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskformUpdate){
       onUpdate(task.id, title, taskdesc) 
    }
    else{
        onCreate(title, taskdesc);
    }
    
    settitle("");
    settaskdesc("");
  };
  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="taskupdate">
          <h3>Please Edit the Task</h3>
          <form className="task-form">
            <label className="tasklabel">Edit the Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskinput"
              type="text"
            />
            <label className="tasklabel">Edit the Task</label>
            <textarea
              value={taskdesc}
              onChange={handleTaskChange}
              className="taskinput"
              name=""
              id=""
              cols="30"
              rows="5"></textarea>
            <button className="taskbutton update-button" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="taskcreate">
          <h3>Please Write Task</h3>
          <form className="task-form">
            <label className="tasklabel">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskinput"
              type="text"
            />
            <label className="tasklabel">Add Task</label>
            <textarea
              value={taskdesc}
              onChange={handleTaskChange}
              className="taskinput"
              name=""
              id=""
              cols="30"
              rows="5"></textarea>
            <button className="taskbutton" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
