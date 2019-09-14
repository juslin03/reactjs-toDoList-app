import React, { Component } from "react";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import initialData from "../initialData";
// import uniqid from "uniqid";
// import Fetching from "./Fetching";

class App extends Component {
  // state = {
  //   fetching: true,
  //   tasks: []
  // };

  // componentDidMount = () => {
  //   let delay = Math.floor(Math.random() * 5000);
  //   console.log(delay);
  //   setTimeout(() => {
  //     this.setState({
  //       fetching: false,
  //       tasks: initialData
  //     });
  //   }, delay);
  // };

  // onAddTask = newTaskName => {
  //   let newTask = {
  //     id: uniqid(),
  //     name: newTaskName,
  //     completed: false
  //   };
  //   this.setState(prevState => ({
  //     tasks: [...prevState.tasks, newTask]
  //   }));
  // };

  // onToggleCompleted = taskId => {
  //   //get the task to modify
  //   let updTask = this.state.tasks.find(task => task.id === taskId);
  //   //toggle the value of completed in the task
  //   updTask.completed = !updTask.completed;
  //   //put the new version of the task in the state
  //   this.setState(prevState =>
  //     prevState.tasks.map(task => {
  //       return task.id === taskId ? updTask : task;
  //     })
  //   );
  // };

  // onDeleteCompleted = () => {
  //   this.setState(prevState => {
  //     let newState = prevState.tasks.filter(task => !task.completed);
  //     return {
  //       tasks: newState
  //     };
  //   });
  // };

  render() {
    return (
      <section id="toDo">
        {/* {this.state.fetching ? <Fetching /> : null} */}
        <BrowserRouter>
          <>
            <Switch>
              <Route path="/add-task" component={AddTask} />
              <Route path="/:filter?" component={ToDoList} />
            </Switch>
            <NavBar onDeleteCompleted={this.onDeleteCompleted} />
          </>
        </BrowserRouter>
      </section>
    ); //end return in render
  } //end render
} //end App class
export default App;
