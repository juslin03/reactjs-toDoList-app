import React, { Component } from "react";

class ToDo extends Component {
  state = {
    completed: this.props.task.completed
  };

  toggleCompleted = () => {
    let { onToggleCompleted, task } = this.props;
    this.setState(prevState => ({
      completed: !prevState.completed
    }));
    onToggleCompleted(task.id);
  };

  render() {
    let { task } = this.props;

    return (
      <li
        className={
          "list-group-item d-flex align-items-center " +
          (this.state.completed ? "bg-success" : "coucou")
        }
      >
        {task.name}
        <button
          className={
            "btn btn-sm ml-auto " +
            (this.state.completed ? "btn-success" : "btn-outline-success")
          }
          onClick={() => this.toggleCompleted()}
        >
          &#x2713;
        </button>
      </li>
    ); //end return in render()
  } //end render()
} //end ToDoClass
export default ToDo;
