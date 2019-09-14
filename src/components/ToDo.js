import React, { Component } from "react";

class ToDo extends Component {
  state = {
    completed: this.props.task.completed
  };

  toggleCompleted = () => {
    this.setState(prevState => ({
      completed: !prevState.completed
    }));
    this.props.onToggleCompleted(this.props.task.id);
  };
  render() {
    return (
      <li
        className={
          "list-group-item d-flex align-tiems-center " +
          (this.state.completed ? "bg-success" : null)
        }
      >
        {this.props.task.name}
        <button
          onClick={() => this.toggleCompleted()}
          className={
            "btn btn-sm ml-auto " +
            (this.state.completed ? "btn-success" : "btn-outline-success")
          }
        >
          &#x2713;
        </button>
      </li>
    );
  }
}

export default ToDo;
