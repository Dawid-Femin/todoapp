import React, { Component } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList';

import './App.css'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac w gre',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'isc do fryzjera',
        date: '2018-02-16',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'kupic mleko',
        date: '2018-02-18',
        important: true,
        active: true,
        finishDate: null
      }
    ]
  }

    deleteTask = (id) => {
      console.log("delete elementu o id" + id);
    }

    changeTaskStatus = (id) => {
      console.log("Change w stanie elementu o id" + id);
    }

  render() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask />
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
    </div>
  );
}
}

export default App;