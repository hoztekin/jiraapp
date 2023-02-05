import{useState} from "react";

function TaskCreate({onCreate}) {
    const [title, settitle] = useState('');
    const [taskdesc, settaskdesc] = useState('');

    const handleChange = (event) =>{
        settitle(event.target.value);
    };
    const handleTaskChange = (event) =>{
        settaskdesc(event.target.value);
    };
    const handleSubmit = (event) =>{
event.preventDefault();
        onCreate(title,taskdesc);
        settitle('');
        settaskdesc('');
    };
    return (  <div className="taskcreate">
        <h3>Please Write Task</h3>
        <form className="task-form" >
            <label className="tasklabel">Title</label>
            <input value={title} onChange={handleChange} className="taskinput" type="text" />
            <label className="tasklabel"  >Add Task</label>
            <textarea value={taskdesc} 
            onChange={handleTaskChange} className="taskinput" name="" id="" cols="30" rows="5"></textarea>
            <button className="taskbutton" onClick={handleSubmit}>Create</button>
        </form>
    </div>);
}

export default TaskCreate ;