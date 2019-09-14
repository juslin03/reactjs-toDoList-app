import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ tasks, match, onToggleCompleted }) => {
  let filteredTasks;

  switch (match.params.filter) {
    case "completed":
      filteredTasks = tasks.filter(task => task.completed);
      break;

    default:
      filteredTasks = tasks;
      break;
  }

  if (filteredTasks.length === 0) {
    return (
      <>
        <h1 className="m-3">Liste des tâches déjà effectuées</h1>
        <ul className="list-group m-3">
          <li className="list-group-item">Aucune tâche à afficher</li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h1 className="m-3">Liste des tâches à effectuer</h1>
        <ul className="list-group m-3">
          {filteredTasks.map(task => (
            <ToDo
              task={task}
              key={task.id}
              onToggleCompleted={onToggleCompleted}
            />
          ))}
        </ul>
      </>
    );
  }
};

export default ToDoList;
