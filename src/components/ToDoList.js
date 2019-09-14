import React, { Component } from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";

class ToDoList extends Component {
  render() {
    return (
      <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
          {this.props.tasks.map(task => (
            <ToDo
              task={task}
              key={task.id}
              
            />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(ToDoList);









// const ToDoList = ({ tasks, onToggleCompleted, match }) => {
//   let filteredTasks;
//   switch (match.params.filter) {
//     case "completed":
//       filteredTasks = tasks.filter(task => task.completed);

//       break;
//     default:
//       filteredTasks = tasks;
//   }
//   if (filteredTasks.length === 0) {
//     return (
//       <>
//         <h1 className="m-3">Liste de tâches</h1>
//         <ul className="list-group m-3">
//           <li className="list-group-item">Aucune tâches à afficher</li>
//         </ul>
//       </>
//     );
//   }
//   return (
//     <>
//       <h1 className="m-3">Liste de tâches</h1>
//       <ul className="list-group m-3">
//         {filteredTasks.map(task => (
//           <ToDo
//             task={task}
//             key={task.id}
//             onToggleCompleted={onToggleCompleted}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };