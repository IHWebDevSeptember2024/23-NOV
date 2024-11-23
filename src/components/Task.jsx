// src/components/Task.jsx

import { useState } from "react";

// LEVEL 3 (desctructuring en el parametro directamente, es locura)
function Task({
  task: { name, description, _id, isDone },
  toggleTaskDone,
  setTasks,
  tasks,
}) {
  /*   const [taskCompleted, setTaskCompleted] = useState(false);

  const toggleTask = () => setTaskCompleted(!taskCompleted); */

  /*   
// LEVEL 1 PRIORIDAAAD, lo otro es BONUS 💩
  const name = props.task.name;
  const description = props.task.description; 
  
*/

  /*
// LEVEL 2 (desctructuring)
  const { name, description } = props.task;
*/

  function deleteTask(taskID) {
    console.log("Delete task pulsado para borrar:", taskID);

    const tasksCopy = tasks.filter((eachTask) => {
      return eachTask._id !== taskID;
    });

    console.log(tasksCopy);

    setTasks(tasksCopy);
  }

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{name}</h1>
        {isDone ? <span>DONE </span> : <span>PENDING ⌛</span>}
        <h2>Task Description</h2>
        <p>{description}</p>

        <button
          className="add"
          onClick={() => {
            toggleTaskDone(_id);
          }}
        >
          {isDone ? <span>UNDO </span> : <span>✔️</span>}
        </button>
        <button
          onClick={() => {
            deleteTask(_id);
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Task;
